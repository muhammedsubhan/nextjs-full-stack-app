import Link from "next/link";
import React from "react";

const Button = ({ text, url }) => {
  return (
    <>
      <Link href={url}>
        <button className="px-3 py-2 bg-green-400 border-none text-white rounded-lg w-max	mt-4">
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
