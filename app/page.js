import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const fetcher = async () => {
    const res = await fetch("http://localhost:3000/api/GetData");
    const data = await res.json();
  };
  return (
    <main>
      <h1 className="mt-5 text-xl flex justify-center">Identity Database</h1>
    </main>
  );
}
