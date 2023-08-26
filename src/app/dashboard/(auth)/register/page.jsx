"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter();

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status =
        201 && router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1>Create an Account</h1>
        <h2>Please sign up to see the dashboard.</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-5">
          <input
            type="text"
            placeholder="Username"
            required
            className="p-2 bg-transparent border border-gray-600 rounded-md text-base font-semibold"
          />
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
            Register
          </button>
          {error && "Something went wrong!"}
        </form>
        <span>- OR -</span>
        <Link href="/dashboard/login">Login with an existing account</Link>
      </div>
    </>
  );
};

export default Register;
