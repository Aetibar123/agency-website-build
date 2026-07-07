import { NextResponse } from "next/server";
import connectToDatabase from "../../../lib/mongodb";
import Blog from "../../../models/Blog";

export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).sort({ publishedAt: -1 });
    return NextResponse.json({ success: true, data: blogs });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectToDatabase();
    
    // Auto-generate slug if not provided
    if (!body.slug && body.title) {
      body.slug = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    const blog = await Blog.create(body);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error: any) {
    // Check for duplicate slug
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: "A blog with this slug already exists." }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
