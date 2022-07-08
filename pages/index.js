import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>FocalTimer</title>
      </Head>
      <Navbar />
      <div className="mx-auto mt-24 w-full max-w-7xl"></div>
    </>
  );
}
