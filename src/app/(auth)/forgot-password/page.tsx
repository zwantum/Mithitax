"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-alt">
      <div className="w-full max-w-md bg-white rounded-3xl border border-brand-border p-8 shadow-card">
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:underline mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to login</span>
        </Link>

        <h1 className="font-serif text-2xl font-semibold text-brand-text mb-2">
          Reset Your Password
        </h1>
        <p className="text-xs text-brand-muted mb-6">
          Enter your registered email address and we will dispatch a secure recovery link.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-brand-alt text-center">
            <CheckCircle2 className="w-10 h-10 text-brand-purple mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold text-brand-text mb-1">
              Reset Link Dispatched
            </h3>
            <p className="text-xs text-brand-muted mb-4">
              Please check your inbox. If the email is registered, you will receive instructions shortly.
            </p>
            <Button href="/login" variant="primary" size="sm">
              Return to Login
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@mithitax.com"
              required
              error={errors.email?.message}
              {...register("email")}
            />
            <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
              Send Password Reset Link
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
