"use client";
import { GET_IDENTITY } from "./api/AccessDB/route";

export default async function Home() {
  const data = await GET_IDENTITY();
  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Identity Database</h1>
      <button onClick={() => signIn("google")}> Sign In</button>
      <h2>
        {data &&
          data.data.map((elem) => {
            return (
              <div key={elem._id}>
                Name : {elem?.Name} || {elem?.Course}
              </div>
            );
          })}
      </h2>
    </main>
  );
}
