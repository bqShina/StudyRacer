import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/prisma/client";

export async function GET(request: NextRequest) {
  const assignments = await prisma.assignment.findMany({
    include: {
      subtasks: true,  
    },
  });
  return NextResponse.json(assignments);
}