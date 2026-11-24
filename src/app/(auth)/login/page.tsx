"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    setErrorMsg("");
    try {
      // Mock login validation
      if (data.email && data.password) {
        router.push("/admin");
      }
    } catch {
      setErrorMsg("Failed to authenticate. Please check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-alt">
      <div className="w-full max-w-md bg-white rounded-3xl border border-brand-border p-8 shadow-card">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center mb-6 group">
            <Image
              src="/logos/MithiTax_Logo.webp"
              alt="Mithi Tax"
              width={160}
              height={42}
              priority
              className="h-10 w-auto object-contain mx-auto"
            />
          </Link>
          <h1 className="font-serif text-2xl font-semibold text-brand-text">
            Staff & Client Portal Login
          </h1>
          <p className="text-xs text-brand-muted mt-1">
            Access secure filing records, GST returns, and corporate workflows.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Corporate / Personal Email"
            type="email"
            placeholder="name@mithitax.com"
            required
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            required
            error={errors.password?.message}
            {...register("password")}
          />

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-brand-muted cursor-pointer">
              <input type="checkbox" className="rounded border-brand-border text-brand-purple" />
              <span>Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="font-medium text-brand-purple hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            className="w-full justify-center mt-2"
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-brand-border text-center">
          <Link
            href="/"
            className="text-xs text-brand-muted hover:text-brand-purple transition inline-flex items-center gap-1"
          >
            <span>Return to public website</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
