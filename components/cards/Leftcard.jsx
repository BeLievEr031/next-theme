import Link from "next/link";
import React from "react";

function Leftcard({ slug, title }) {
  return (
    <>
      <div className="container">
        <div className="  px-3 ">
          <Link href={`/post/${slug}`}>
            <div className=" py-2 cursor-pointer text-[ 0.938rem] font-normal line-clamp-3 ">
              {title}
            </div>
            <div className="h-[2px] w-full my-1 bg-gray-300"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Leftcard;
