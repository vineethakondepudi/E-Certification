import connectMongoDB from "@/libs/mongodb";
import Login from "@/model/login"
import { NextResponse } from "next/server";



export async function POST(request) {
    const { email, password } = await request.json();
    await connectMongoDB();
  
    try {
      const user = await Login.findOne({ email, password });
  
      if (user) {
        return NextResponse.json({ message: "Login Successful" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "User not found or invalid credentials" }, { status: 401 });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      return NextResponse.json({ error: "An error occurred while logging in" }, { status: 500 });
    }
  }



export async function GET() {
  await connectMongoDB();
  const login = await Login.find();
  return NextResponse.json({ login });
}

