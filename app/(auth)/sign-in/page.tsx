"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../supabaseClient";
import Image from "next/image";
import gIocn from "@/app/public/google.png";
import Link from "next/link";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Sign-in Error:", error.message);
    } else {
      router.push("/"); // Redirect to home after successful sign-in
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error with Google Sign In:", error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-400 flex items-center justify-center">
      <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[65vh] flex flex-col items-center justify-start bg-white shadow-2xl shadow-black border-2 border-gray-600 rounded-xl">
        <div className="font-bold text-xl mt-6">Sign in with your account</div>
        <div className="text-sm text-gray-500 text-center">
          Welcome! Please enter your details.
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="flex mt-6 cursor-pointer items-center justify-center gap-4 border-gray-300 border-2 w-36 h-8 rounded-lg"
        >
          <div>
            <Image src={gIocn} width={15} height={10} alt="google" />
          </div>
          <div className="text-sm font-light text-gray-800">Google</div>
        </button>
        <div className="flex items-center justify-center mt-4">
          <div className="w-20 md:w-36 h-[0.1rem] bg-gray-600"></div>
          <div className="text-sm">or</div>
          <div className="w-20 md:w-36 h-[0.1rem] bg-gray-600"></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-6 mt-4">
          <div className="flex flex-col items-start justify-center gap-2">
            <label className="text-sm font-semibold" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 w-[60vw] sm:w-80 md:w-80 rounded"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <label className="text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border p-2 w-[60vw] sm:w-80 md:w-80 rounded"
            />
          </div>
        </div>
        <div
          onClick={handleSignIn}
          className="bg-purple-500 cursor-pointer p-2 rounded-lg w-48 md:w-56 flex items-center justify-center mt-12"
        >
          <button disabled={loading} className="text-sm font-bold text-white">Continue</button>
        </div>
        <div className="w-full md:w-80 mt-4 h-[0.05rem] bg-gray-600"></div>
        <div className="flex items-center justify-center mt-4 gap-1">
          <div className="text-sm font-normal">Don&apos;t have an account?
          </div>
          <Link href="/sign-up"><div className="text-purple-500 cursor-pointer text-sm font-bold">
            Sign up
          </div></Link>
        </div>
      </div>
    </div>
  );
}