import Hello from "../components/hello";

export default function Home() {
  console.log("welcome to nextjs")
  return (
    <>
    <h1 className="text-3xl">Welcome to nextjs</h1>
    <Hello/>
    </>
  );
}
