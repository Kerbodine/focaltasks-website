import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { BiMenu, BiX } from "react-icons/bi";
import Logo from "../public/focaltasks-logo.svg";

export default function Navbar() {
  const links = [
    {
      href: "#features",
      label: "Features",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
    {
      href: "https://app.focaltasks.com/login",
      label: "Login",
    },
    {
      href: "https://app.focaltasks.com/signup",
      label: "Signup",
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="mx-auto flex w-full max-w-6xl items-center gap-2 border-b-2 border-gray-100 py-4 px-4"
    >
      {({ open }) => (
        <>
          <div className="flex w-full">
            <div className="flex flex-shrink-0 items-center">
              <Logo className="h-10 w-10" />
              <h2 className="ml-3 text-xl font-semibold tracking-tighter">
                FocalTasks
              </h2>
            </div>
            <div className="hidden items-center sm:ml-auto sm:flex sm:space-x-2">
              {links.slice(0, 2).map((link, index) => (
                <Link key={index} href={link.href}>
                  <div className="navbar-item">{link.label}</div>
                </Link>
              ))}
              <div className="h-8 w-0.5 bg-gray-200"></div>
              <Link href="/login">
                <div className="navbar-item">Log in</div>
              </Link>
              <Link href="/signup">
                <div className="cursor-pointer rounded-lg border-2 border-accent py-1.5 px-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                  Sign up
                </div>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <BiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <BiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="absolute inset-x-0 top-[74px] border-b-2 border-gray-200 bg-white sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {links.map((link, index) => (
                <Disclosure.Button as="div" key={index}>
                  <Link href={link.href}>
                    <div className="mobile-navbar-item">{link.label}</div>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
