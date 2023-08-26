"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session.status === "loading") {
    return <p>Loading.....</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-5">
          <input
            type="text"
            placeholder="Email"
            required
            className="p-2 bg-transparent border border-gray-600 rounded-md text-base font-semibold"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="p-2 bg-transparent border border-gray-600 rounded-md text-base font-semibold"
          />
          <button className="py-[3px] px-3 border-none bg-green-400 text-white rounded-md font-semibold">
            Login
          </button>
          {/* {error && "Something went wrong!"} */}
        </form>
        <button
          className="py-[3px] px-3 border-none bg-green-400 text-white rounded-md font-semibold"
          onClick={() => signIn("google")}
        >
          Login With Google
        </button>
      </div>
    </>
  );
};

export default Login;
