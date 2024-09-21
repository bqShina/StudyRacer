import * as fs from "node:fs";
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
  // Parse the PDF file
  const pdfText = await parsePdf("state_of_the_union.pdf");

  // Split the text into chunks
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([pdfText]);

  // Create a vector store from the documents
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );

  // Initialize a retriever wrapper around the vector store
  const vectorStoreRetriever = vectorStore.asRetriever();

  // Create a system & human prompt for the chat model
  const SYSTEM_TEMPLATE = `Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say that you don't know, don't try to make up an answer.
----------------
{context}`;

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM_TEMPLATE],
    ["human", "{question}"],
  ]);

  const chain = RunnableSequence.from([
    {
      context: vectorStoreRetriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  // Invoke the chain with a question
  const answer = await chain.invoke(
    "What is the paper about"
  );

  console.log({ answer });
};

// Run the function
run().catch((err) => console.error(err));
