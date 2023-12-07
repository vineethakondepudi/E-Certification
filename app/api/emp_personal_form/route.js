import connectMongoDB from "@/libs/mongodb";
import PersonalForm from "@/model/personal_form"
import { NextResponse } from "next/server";



export async function POST(request) {
    const { firstName, lastName, gender, maritalStatus, profilePicture } = await request.json();
    await connectMongoDB();
    await PersonalForm.create({ firstName, lastName, gender, maritalStatus, profilePicture  });
    return NextResponse.json({ message: "Login Successfully" }, { status: 201 });
  }


export async function GET() {
  await connectMongoDB();
  const login = await PersonalForm.find();
  return NextResponse.json({ login });
}


