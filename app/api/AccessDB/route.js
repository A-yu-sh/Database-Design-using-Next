export async function GET_IDENTITY() {
  const response = await fetch("http://localhost:3000/api/Data", {
    cache: "no-store",
  });
  return response.json();
}
