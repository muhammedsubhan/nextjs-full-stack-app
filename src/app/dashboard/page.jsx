"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "loading") {
    return <p>Loading.....</p>;
  }

  return <>{session.status === "authenticated" && <div>dashboard</div>}</>;
};

export default Dashboard;
