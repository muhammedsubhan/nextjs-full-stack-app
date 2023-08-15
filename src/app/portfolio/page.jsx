import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div>
        <h1 className="mt-4 mb-3 font-medium text-xl">Choose a gallery</h1>
        <div className="flex gap-12">
          <Link
            href="/portfolio/illustrations"
            className="border border-gray-400 rounded-lg w-[300px] h-[400px] relative item-image 	"
          >
            <span className="absolute right-3 bottom-3 text-4xl font-semibold ">
              Illustrations
            </span>
          </Link>
          <Link
            href="/portfolio/websites"
            className="border border-gray-400 rounded-lg w-[300px] h-[400px] relative item-image"
          >
            <span className="absolute right-3 bottom-3 text-4xl font-semibold ">
              Websites
            </span>
          </Link>
          <Link
            href="/portfolio/applications"
            className="border border-gray-400 rounded-lg w-[300px] h-[400px] relative item-image"
          >
            <span className="absolute right-3 bottom-3 text-4xl font-semibold ">
              Application
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
