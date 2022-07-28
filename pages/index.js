import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { BiCheck, BiLoaderAlt } from "react-icons/bi";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../config/firebase";
import { nanoid } from "nanoid";
import Features from "../components/Features";
import Script from "next/script";
import Footer from "../components/Footer";
import FAQ from "../components/Faq";
import Testimonials from "../components/Testimonials";

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
        <title>FocalTasks — Your All In One Productivity Suite</title>
        <meta
          name="title"
          content="FocalTasks — Your All In One Productivity Suite"
        />
        <meta
          name="description"
          content="Create to-do lists, share tasks, and level up your productivity."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.focaltasks.com/" />
        <meta
          property="og:title"
          content="FocalTasks — Your All In One Productivity Suite"
        />
        <meta
          property="og:description"
          content="Create to-do lists, share tasks, and level up your productivity."
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.focaltasks.com/" />
        <meta
          property="twitter:title"
          content="FocalTasks — Your All In One Productivity Suite"
        />
        <meta
          property="twitter:description"
          content="Create to-do lists, share tasks, and level up your productivity."
        />
        <meta property="twitter:image" content="%PUBLIC_URL%/og-image.png" />
      </Head>
      <Script async src="https://cdn.splitbee.io/sb.js" />
      <Navbar />
      <div className="mx-auto mt-16 w-full max-w-6xl px-6 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-0 lg:flex-row">
          <div className="mx-auto flex flex-col items-center text-center lg:basis-2/5 lg:items-start lg:text-left">
            <div className="-ml-1 mb-8 flex truncate rounded-md bg-white leading-5 ring-2 ring-gray-200">
              <span className="inline-flex gap-2 p-1.5">
                <span className="-m-0.5 flex items-center rounded-md bg-accent px-1.5 text-xs font-semibold text-white">
                  BETA
                </span>
                <span className="font-medium tracking-tight text-gray-700">
                  FocalTasks is currently in private beta.
                </span>
              </span>
            </div>
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
              <form className="relative flex" onSubmit={handleSubmit}>
                <div className="absolute -top-12" id="waitlist"></div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
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
              src="/focaltasks-small.png"
              width={808}
              height={594}
              alt=""
            />
          </div>
        </div>
        <hr className="my-8 h-0.5 border-0 bg-gray-200" />
        {/* <Testimonials /> */}
        <Features />
        <FAQ />
        <Footer
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          loading={loading}
          submitEmail={submitEmail}
        />
      </div>
    </>
  );
}
