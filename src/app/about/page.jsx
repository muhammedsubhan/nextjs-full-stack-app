import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div>
        <div className="w-full h-[300px] relative">
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="object-cover grayscale"
          />
          <div className="absolute bottom-5 left-5 bg-green-300 p-1 text-white">
            <h1 className="text-4xl font-semibold">Digital Storytellers</h1>
            <h2 className="text-xl font-medium">
              Handcrafting award winning digital experiences
            </h2>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="flex-1 mt-12 flex flex-col gap-8">
            <h1 className="text-xl ">Who Are We?</h1>
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
              beatae, a suscipit eos. Animi quibusdam cum omnis officiis
              <br />
              <br />
              voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam
              iure esse tempora beatae, a suscipit eos. Animi quibusdam cum
              omnis officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className="flex-1 mt-12 flex flex-col gap-8">
            <h1 className="text-xl ">What We Do?</h1>
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              - Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
