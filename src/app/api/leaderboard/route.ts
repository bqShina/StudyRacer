import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/prisma/client";

export async function GET(request: NextRequest) {
//   const products = await prisma.product.findMany();
const leaderboards = await prisma?.leaderboard.findMany();
  return NextResponse.json(leaderboards);
}

