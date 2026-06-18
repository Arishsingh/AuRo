import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import { Waitlist } from "@/models/Waitlist";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    await connectDB();
    await Waitlist.create({ email });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err.code === 11000) {
      return NextResponse.json({ error: "Already on the waitlist" }, { status: 409 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
