import Input from "./Components/Input";
import { GET_IDENTITY } from "./api/AccessDB/route";

export default async function Home() {
  const data = await GET_IDENTITY();

  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Listing</h1>
      <Input />
      {data.data &&
        data.data.map((e) => {
          return <div key={e._id}>{e.task}</div>;
        })}
    </main>
  );
}
