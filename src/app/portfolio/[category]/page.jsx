import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <>
      <div>
        <h1 className="text-green-400 text-2xl font-semibold m-2">
          {params.category}
        </h1>

        {data.map((item) => (
          <div key={item.id} className="flex gap-12 mt-12 mb-24 item-reverse">
            <div className="flex-1 flex flex-col gap-5 justify-center	">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className="flex-1 h[500px] relative">
              <Image
                fill={true}
                src={item.image}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
