import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // In production with Supabase Storage:
    // await supabase.storage.from('media').upload(...)
    return NextResponse.json({
      success: true,
      url: `/images/uploads/${file.name}`,
      size: file.size,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Upload failed" },
      { status: 500 }
    );
  }
}
