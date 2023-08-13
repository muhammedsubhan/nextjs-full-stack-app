import Image from "next/image";
import React from "react";
import Hero from "public/hero.png";
const Home = () => {
  return (
    <>
      <div className="flex items-center gap-24 ">
        <div className="flex-1 flex flex-col">
          <h1 className="title">Better design for your digital products.</h1>
          <p className="text-2xl font-light mt-3">
            Turning your Ideas into Reality. We bring togather the terms from
            global tech industry.
          </p>
          <button className="px-3 py-2 bg-green-400 border-none text-white rounded-lg w-max	mt-4">
            See Our Works
          </button>
        </div>
        <div className="flex-1 flex flex-col gap-12">
          <Image
            src={Hero}
            alt="hero-image"
            className="w-[100%] h-[500px] image-move object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
