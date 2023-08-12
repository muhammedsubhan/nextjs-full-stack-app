import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[50px] flex items-center justify-between">
        <div>©2023 Lamamia. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <Image
            src="/1.png"
            width={15}
            height={15}
            alt="facebook"
            className="cursor-pointer opacity-50"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            alt="instagram"
            className="cursor-pointer opacity-50"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            alt="twitter"
            className="cursor-pointer opacity-50"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            alt="youtube"
            className="cursor-pointer opacity-50"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
