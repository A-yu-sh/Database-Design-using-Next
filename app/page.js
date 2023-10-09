"use client";
import Input from "./Components/Input";
import { GET_IDENTITY } from "./api/AccessDB/route";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {
  // const data = await GET_IDENTITY();
  const { status, data: session } = useSession();

  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Listing</h1>
      <Input />
      {status === "authenticated" ? (
        <p>{session.user.name}</p>
      ) : (
        <button onClick={() => signIn("google")}>sign In</button>
      )}
    </main>
  );
}
