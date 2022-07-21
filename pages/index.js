import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { BiCheck, BiLoaderAlt } from "react-icons/bi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config/firebase";
import { nanoid } from "nanoid";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitEmail, setSubmitEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitEmail(true);
    await setDoc(doc(getFirestore(app), "Emails", nanoid()), { email: email });
    setLoading(false);
    setEmail("");
  };

  return (
    <>
      <Head>
        <title>FocalTimer</title>
      </Head>
      <Navbar />
      <div className="mx-auto mt-16 w-full max-w-6xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-0 lg:flex-row">
          <div className="mx-auto flex flex-col items-center text-center lg:basis-2/5 lg:items-start lg:text-left">
            <h1 className="text-4xl font-bold leading-[40px] tracking-tighter sm:text-5xl sm:leading-[54px]">
              Your{" "}
              <span className="text-accent underline decoration-accent/50 underline-offset-2">
                All-in-one
              </span>{" "}
              <br />
              Productivity Suite
            </h1>
            <p className="mt-6 text-lg font-medium leading-6 tracking-tight text-black/50">
              Being organized is just one click away. <br />
              Discover how to supercharge your productivity today.
            </p>
            <div className="mt-8 flex gap-4">
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your best email..."
                  className="h-12 w-48 rounded-l-lg border-2 border-r-0 border-gray-200 pl-3 font-medium tracking-tight text-gray-700 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-12 w-28 items-center justify-center rounded-r-lg bg-accent font-medium text-white transition-colors hover:bg-accent/80"
                >
                  {loading ? (
                    <BiLoaderAlt className="animate-spin text-2xl" />
                  ) : submitEmail ? (
                    <BiCheck className="text-4xl" />
                  ) : (
                    <p>Join Waitlist</p>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className="basis-1 md:basis-3/5">
            <Image
              src="/focaltimer-small.png"
              width={808}
              height={594}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
