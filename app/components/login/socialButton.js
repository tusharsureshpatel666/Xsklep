"use server";

import { signIn } from "@/app/auth";

// From your auth.js config

export async function SignIn1(provider) {
  await signIn(provider, {
    redirectTo: "/dashboard", // where user goes after login
  });
}
