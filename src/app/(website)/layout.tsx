import React from "react";
import Header from "@/components/website/header";
import Footer from "@/components/website/footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[65px]">{children}</main>
      <Footer />
    </>
  );
}
