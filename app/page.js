import Image from "next/image";
import { GET_IDENTITY } from "./api/AccessDB/route";

export default async function Home() {
  const data = await GET_IDENTITY();
  console.log(data);
  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Identity Database</h1>
      <h2>
        {data &&
          data.data.map((elem) => {
            return <div key={elem._id}>Name : {elem.Name}</div>;
          })}
      </h2>
    </main>
  );
}
