import Input from "./Components/Input";
import { GET_IDENTITY } from "./api/AccessDB/route";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default async function Home() {
  const data = await GET_IDENTITY();

  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Listing</h1>
      <Input />
      {data.data &&
        data.data.map((e) => {
          return <div>{e.task}</div>;
        })}
    </main>
  );
}
