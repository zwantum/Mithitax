"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ResetPasswordPage() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = async () => {
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-brand-alt">
      <div className="w-full max-w-md bg-white rounded-3xl border border-brand-border p-8 shadow-card">
        <h1 className="font-serif text-2xl font-semibold text-brand-text mb-2">
          Set New Password
        </h1>
        <p className="text-xs text-brand-muted mb-6">
          Create a secure password with at least 8 characters.
        </p>

        {success ? (
          <div className="p-6 rounded-2xl bg-brand-alt text-center">
            <CheckCircle2 className="w-10 h-10 text-brand-purple mx-auto mb-3" />
            <h3 className="font-serif text-lg font-semibold text-brand-text mb-1">
              Password Updated Successfully
            </h3>
            <p className="text-xs text-brand-muted mb-4">
              Your password has been reset. You may now log in with your new credentials.
            </p>
            <Button href="/login" variant="primary" size="sm">
              Sign In Now
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="New Password"
              type="password"
              placeholder="••••••••"
              required
              error={errors.password?.message}
              {...register("password")}
            />
            <Input
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
              required
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
              Update Password
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
