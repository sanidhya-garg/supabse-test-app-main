"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../supabaseClient";
import Image from "next/image";
import gIocn from "@/app/public/google.png";
import Link from "next/link";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign-up Error:", error.message);
    } else {
      router.push("/task"); // Redirect to home after successful sign-up
    }
    setLoading(false);
  };
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/task`, // Redirect to /task after sign-in
      },
    });
  
    if (error) {
      console.error("Error with Google Sign In:", error.message);
    }
  };
  return (
    <div className="w-full h-screen bg-gray-400 flex items-center justify-center">
      <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] h-[75vh] flex flex-col items-center justify-start bg-white shadow-2xl shadow-black border-2 border-gray-600 rounded-xl">
        <div className="font-bold text-xl mt-6">Create Your Account</div>
        <div className="text-sm text-gray-500 text-center">
          Welcome! Please fill in the details to get started.
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
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-start justify-center gap-2">
              <label className="text-sm font-semibold" htmlFor="email">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
                className="border p-2 w-[30vw] sm:w-40 md:w-40 rounded"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label className="text-sm font-semibold" htmlFor="email">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
                className="border p-2 w-[30vw] sm:w-40 md:w-40 rounded"
              />
            </div>
          </div>
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
          onClick={handleSignUp}
          className="bg-purple-500 cursor-pointer p-2 rounded-lg w-48 md:w-56 flex items-center justify-center mt-12"
        >
          <div className="text-sm font-bold text-white">Continue</div>
        </div>
        <div className="w-full md:w-80 mt-4 h-[0.05rem] bg-gray-600"></div>
        <div className="flex items-center justify-center mt-4 gap-1">
          <div className="text-sm font-normal">Already have an account?</div>
          <Link href="/sign-in"><div className="text-purple-500 cursor-pointer text-sm font-bold">
            Sign in
          </div></Link>
        </div>
      </div>
    </div>
  );
}