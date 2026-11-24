import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = consultationSchema.parse(body);

    // In production with Supabase connected, insert into 'enquiries' table:
    // const supabase = await createClient();
    // await supabase.from('enquiries').insert([validatedData]);

    console.log("New Enquiry Received:", validatedData);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Our team will contact you within 1 business day.",
      data: validatedData,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Invalid enquiry submission" },
      { status: 400 }
    );
  }
}
