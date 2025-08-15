import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

    const response = NextResponse.json(
      { success: true, data: newStudent },
      { status: 201 }
    );

    const token = jwt.sign({id : newStudent.id}, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
