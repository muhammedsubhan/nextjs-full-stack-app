import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <>
      <div>
        <div className="flex">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="text-3xl">{data.title}</h1>
            <p className="text-base font-light">{data.desc}</p>
            <div className="flex items-center gap-3">
              <Image
                src={data.img}
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              <span>{data.username}</span>
            </div>
          </div>
          <div className="flex-1 h-[300px] relative">
            <Image src={data.img} alt="" fill={true} className="object-cover" />
          </div>
        </div>
        <div className="mt-10 text-xl font-light text-gray-400 text-justify">
          <p>{data.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
