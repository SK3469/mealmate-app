import { z } from "zod";

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    contact: z.string().min(10, "Contact number must be exactly 10 digits").max(10, "Contact number cannot exceed 10 digits")
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

// Login Schema
export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type LoginInputState = z.infer< typeof userLoginSchema>

