import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().refine((data) => data.length >= 4 && data.length <= 20, {
    message: "Username must be between 4 and 20 characters",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Your password must be at least 8 characters long" })
    .refine(
      (data) => {
        return /[A-Z]/.test(data);
      },
      { message: "Your password must contain at least one uppercase letter" }
    )
    .refine(
      (data) => {
        return /[a-z]/.test(data);
      },
      { message: "Your password must contain at least one lowercase letter" }
    )
    .refine(
      (data) => {
        return /[!@#$%^&*(),.?":{}|<>]/.test(data);
      },
      { message: "Your password must contain at least one special character" }
    ),
});

export type SignupInput = z.infer<typeof signupSchema>;
