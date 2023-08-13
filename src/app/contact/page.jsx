import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <h1 className="text-center mb-24 text-4xl font-semibold">
          Let's Keep in Touch
        </h1>
        <div className="flex items-center gap-24">
          <div className="flex-1 h-[500px] relative">
            <Image
              src="/contact.png"
              alt=""
              fill={true}
              className="object-contain image-move"
            />
          </div>
          <form className="flex-1 flex flex-col gap-5">
            <input
              type="text"
              placeholder="name"
              className="p-4 bg-transparent  outline-none border-2 border-gray-400 rounded-xl"
            />
            <input
              type="text"
              placeholder="email"
              className="p-4 bg-transparent  outline-none border-2 border-gray-400 rounded-xl"
            />
            <textarea
              placeholder="message"
              cols="30"
              rows="10"
              className="p-4 bg-transparent  outline-none border-2 border-gray-400 rounded-xl"
            ></textarea>
            <Button url="#" text="Send" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
