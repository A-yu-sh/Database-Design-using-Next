import Input from "./Components/Input";
import { GET_IDENTITY } from "./api/AccessDB/route";

export default async function Home() {
  const data = await GET_IDENTITY();
  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Identity Database</h1>
      <Input />
      <h2>
        {data &&
          data.data.map((elem) => {
            return <div key={elem._id}>Task : {elem?.task}</div>;
          })}
      </h2>
    </main>
  );
}
