import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export const GET = async () => {
  try {
    const response = await prisma.gamePlay.findMany({
      orderBy: [{ points: "desc" }, { time: "desc" }],
    });
    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
};

export const POST = async (req: Request) => {
  const { name, answers, points, time } = await req.json();
  try {
    await prisma.gamePlay.create({
      data: {
        name: name,
        answers: answers,
        points: points,
        time: time,
      },
    });
    return NextResponse.json({ status: 201 });
  } catch (e) {
    return NextResponse.json({ status: 500 });
  }
};
