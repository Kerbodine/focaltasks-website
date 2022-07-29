import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="relative my-16">
      <div className="absolute -top-12" id="features"></div>
      <h2 className="text-3xl font-semibold leading-8 tracking-tighter opacity-60 md:text-4xl">
        Meet your new favorite todo-list app.
      </h2>
      <div className="feature-grid mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/minimal.png"
            width={704}
            height={768}
            alt="Minimal design"
            layout="responsive"
          />
        </div>
        <div className="col-span-2 hidden overflow-hidden rounded-2xl border-2 border-gray-200 md:block">
          <Image
            src="/command-palette.png"
            width={1440}
            height={768}
            alt="Command palette"
            layout="responsive"
          />
        </div>
        <div className="col-span-1 overflow-hidden rounded-2xl border-2 border-gray-200 md:hidden">
          <Image
            src="/command-palette-small.png"
            width={704}
            height={768}
            alt="Command palette"
            layout="responsive"
          />
        </div>
        <div className="col-span-2 hidden overflow-hidden rounded-2xl border-2 border-gray-200 md:block">
          <Image
            src="/mobile.png"
            width={1440}
            height={768}
            alt="Mobile"
            layout="responsive"
          />
        </div>
        <div className="col-span-1 overflow-hidden rounded-2xl border-2 border-gray-200 md:hidden">
          <Image
            src="/mobile-small.png"
            width={704}
            height={768}
            alt="Mobile"
            layout="responsive"
          />
        </div>
        <div className="col-span-1 overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/collaborate.png"
            width={704}
            height={768}
            alt="Collaboration"
            layout="responsive"
          />
        </div>
      </div>
      <h2 className="mt-12 text-3xl font-semibold leading-8 tracking-tighter opacity-60 md:text-4xl">
        And theres even more...
      </h2>
      <div className="feature-grid mt-6 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/dark-mode.png"
            width={540}
            height={720}
            alt="Dark mode"
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/pomodoro-session.png"
            width={540}
            height={720}
            alt="Pomodoro sessions"
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/public-lists.png"
            width={540}
            height={720}
            alt="Public lists"
            layout="responsive"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200">
          <Image
            src="/dnd.png"
            width={540}
            height={720}
            alt="Drag and drop"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
