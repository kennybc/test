import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export const GET = async () => {
  try {
    const response = await prisma.archive.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
};

export const POST = async () => {
  const response = await prisma.gamePlay.findMany();
  await response.forEach(async (record) => {
    await prisma.archive.create({ data: record });
  });
  await prisma.gamePlay.deleteMany();
  try {
    return NextResponse.json({ status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
};
