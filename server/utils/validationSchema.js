import { z } from "zod";
export const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
  firstName: z.string().min(5),
  lastName: z.string().min(5).optional(),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});
