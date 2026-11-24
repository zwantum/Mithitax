// Enquiries Feature Module
import { ConsultationFormData, EnquiryRecord } from "@/types";

export async function submitEnquiry(data: ConsultationFormData) {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
