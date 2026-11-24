import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(80, { message: "Full name must not exceed 80 characters." }),
  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number (at least 10 digits)." })
    .max(15, { message: "Phone number is too long." })
    .regex(/^[0-9+\s\-()]+$/, { message: "Please enter a valid phone number format." }),
  email: z
    .string()
    .email({ message: "Please enter a valid corporate or personal email address." }),
  companyName: z
    .string()
    .max(100, { message: "Company name must not exceed 100 characters." })
    .optional()
    .or(z.literal("")),
  serviceCategory: z
    .string()
    .min(1, { message: "Please select the required service category." }),
  requirementDetails: z
    .string()
    .min(10, { message: "Please provide a brief description of your requirement (minimum 10 characters)." })
    .max(1000, { message: "Description cannot exceed 1000 characters." }),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Confirm password must match." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
