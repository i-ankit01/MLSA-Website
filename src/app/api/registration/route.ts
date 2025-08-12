import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      rollno,
      branch,
      year,
      email,
      contact,
      firstDomain,
      secondDomain,
      motivation,
      toContribute,
      experience,
      additionalInfo,
    } = body;

    const newStudent = await prisma.student.create({
      data: {
        name,
        rollno,
        branch,
        year,
        email,
        contact,
        firstDomain,
        secondDomain,
        motivation,
        toContribute,
        experience,
        additionalInfo,
      },
    });

    return NextResponse.json(
      { success: true, data: newStudent },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
