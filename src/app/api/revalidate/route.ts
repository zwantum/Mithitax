import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const { path, secret } = await request.json();

    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: "Invalid secret token" }, { status: 401 });
    }

    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, path, now: Date.now() });
    }

    return NextResponse.json({ message: "Missing path to revalidate" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message || "Revalidation error" }, { status: 500 });
  }
}
