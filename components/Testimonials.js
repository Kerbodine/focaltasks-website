import React from "react";
import Review from "./Review";

export default function Testimonials() {
  return (
    <div className="relative w-full">
      <div className="absolute -top-12" id="reviews"></div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
