import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongodb";
import Blog from "../../../../models/Blog";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const resolvedParams = await params;
    
    // We can fetch by ID or by Slug
    // If it's a valid Mongo ObjectID, fetch by ID, else fetch by slug
    const isObjectId = resolvedParams.id.match(/^[0-9a-fA-F]{24}$/);
    
    let blog;
    if (isObjectId) {
      blog = await Blog.findById(resolvedParams.id);
    } else {
      blog = await Blog.findOne({ slug: resolvedParams.id });
    }

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const body = await request.json();
    await connectToDatabase();
    const resolvedParams = await params;
    
    const blog = await Blog.findByIdAndUpdate(resolvedParams.id, body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: blog });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    const resolvedParams = await params;
    const blog = await Blog.findByIdAndDelete(resolvedParams.id);

    if (!blog) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
