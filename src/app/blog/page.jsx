import Image from "next/image";
import Link from "next/link";
import React from "react";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const Blog = async () => {
  // const data = await getData();
  return (
    <>
      {/* <div>
        {data.map((item) => (
          <Link href={`/blog/${item._id}`} key={item.id}>
            <div>
              <Image src={item.img} alt="" width={400} height={250} />
            </div>
            <div>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default Blog;
