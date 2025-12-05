"use client";
import React from "react";
import Image from "next/image";
import { SignIn1 } from "./socialButton";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-3xl font-semibold dark:text-white">Welcome back</h1>
        <p className="text-gray-400">Sign in to your account</p>

        {/* Google */}
        <button
          onClick={() => SignIn1("google")}
          className="w-full border dark:text-white border-gray-600 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Image src="/Google.svg" width={20} height={20} alt="google" />
          Continue with Google
        </button>

        {/* GitHub */}
        <button
          onClick={() => SignIn1("discord")}
          className="w-full border dark:text-white border-gray-600 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Image src="/discord.svg" width={20} height={20} alt="github" />
          Continue with Discord
        </button>

        {/* Facebook */}
        <button
          onClick={() => SignIn1("facebook")}
          className="w-full border dark:text-white border-gray-600 py-3 rounded-lg flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Image src="/facebook.svg" width={20} height={20} alt="facebook" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
