import fs from "node:fs";
import pdf from "pdf-parse"; // Import pdf-parse to read PDFs
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

// Function to format documents as string
const formatDocumentsAsString = (documents) => {
  return documents.map((document) => document.pageContent).join("\n\n");
};

// Initialize the LLM to use to answer the question
const model = new ChatOpenAI({
  model: "gpt-4o",
});

// Function to read and parse PDF file
const parsePdf = async (filePath) => {
  const pdfBuffer = fs.readFileSync(filePath); // Read the PDF file into a buffer
  const data = await pdf(pdfBuffer); // Use pdf-parse to extract text from PDF
  return data.text; // Extracted text from the PDF
};

const run = async () => {
  // Parse the PDF file containing the user's solution
  const pdfText = await parsePdf("sample_solution.pdf");

  // Split the user's solution text into chunks
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const userDocs = await textSplitter.createDocuments([pdfText]);

  // Create a vector store from the user's solution documents
  const vectorStore = await MemoryVectorStore.fromDocuments(
    userDocs,
    new OpenAIEmbeddings()
  );

  // Initialize a retriever wrapper around the vector store for user submissions
  const vectorStoreRetriever = vectorStore.asRetriever();

  // Parse the checkpoints file
  const checkpointsText = await parsePdf("assignment_checkpoints.pdf");

  // Split the checkpoints text into chunks
  const checkpointDocs = await textSplitter.createDocuments([checkpointsText]);

  // Create a second vector store from the checkpoints documents
  const checkpointVectorStore = await MemoryVectorStore.fromDocuments(
    checkpointDocs,
    new OpenAIEmbeddings()
  );

  // Initialize a retriever wrapper around the checkpoint vector store
  const checkpointVectorStoreRetriever = checkpointVectorStore.asRetriever();

  // Define the system template for the chat model
  const SYSTEM_TEMPLATE = `
  You are tasked with verifying the completion of assignment checkpoints for a user. 

  The user has submitted their assignments, and you have access to the following files:
  1. **assignment_checkpoints.pdf**: This file contains the checkpoints that need to be completed for the assignment.
  2. **sample_submission.pdf**: This file contains the user's submission to compare against the required checkpoints.

  Your job is to analyze the provided files and determine the following:
  - Has the user completed the declared checkpoints?
  - If not, which specific checkpoints are missing?

  Use the content from both files to provide a clear and concise response.

  Instructions:
  - Compare the user's submission against the required checkpoints listed in the assignment checkpoints file.
  - List any missing checkpoints explicitly and provide a summary of the overall completion status.

  Respond with a conclusion in JSON that indicates whether the user has successfully completed all checkpoints or details the missing items.
  ----------------
  {context}`;

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_TEMPLATE],
    ["human", "{question}"],
  ]);

  // Combine both vector stores in the RunnableSequence
  const chain = RunnableSequence.from([
    {
      context: vectorStoreRetriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(), // For user submission
    },
    {
      context: checkpointVectorStoreRetriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(), // For checkpoints
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  // Invoke the chain with a question
  const answer = await chain.invoke(
    "Check the submission and verify if the checkpoints are completed"
  );

  console.log({ answer });
};

// Run the function
run().catch((err) => console.error(err));
