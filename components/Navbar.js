import Link from "next/link";
import React from "react";
import Logo from "../public/focaltasks-logo.svg";

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center gap-2 border-b-2 border-gray-100 py-4 px-4">
      <li className="flex items-center">
        <Logo className="h-10 w-10" />
        <h2 className="ml-3 text-xl font-semibold tracking-tighter">
          FocalTasks
        </h2>
      </li>
      <span className="ml-auto"></span>
      <Link href="#features">
        <p className="navbar-item">Features</p>
      </Link>
      <Link href="#faq">
        <p className="navbar-item">FAQ</p>
      </Link>
      <div className="h-8 w-0.5 bg-gray-100"></div>
      <Link href="https://app.focaltasks.com/login">
        <button className="navbar-item">Log in</button>
      </Link>
      <Link href="https://app.focaltasks.com/signup">
        <button className="h-10 rounded-lg border-2 border-accent px-3 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
          Sign up
        </button>
      </Link>
    </nav>
  );
}
