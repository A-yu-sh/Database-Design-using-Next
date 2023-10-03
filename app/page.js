"use client";
import Input from "./Components/Input";
import { GET_IDENTITY } from "./api/AccessDB/route";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  // const data = await GET_IDENTITY();
  const { status } = useSession();
  console.log(status);
  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Identity Database</h1>
      <Input />
      {status === "authenticated" ? (
        <button onClick={() => signOut("google")}>sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>sign In</button>
      )}
    </main>
  );
}
