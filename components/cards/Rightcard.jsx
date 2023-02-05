import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import parseMilliseconds from "parse-ms";
function Rightcard({ breakingNews }) {
  const convert = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currDate = new Date();
    const differnce = currDate.getTime() - createdDate.getTime();
    const { days, hours, minutes } = parseMilliseconds(differnce);
    // console.log(parseMilliseconds(differnce));
    if (days != 0) {
      return `${days} days ago`;
    } else if (hours > 0) {
      return `${hours} hours ago`;
    }
    return `${minutes} min ago`;
  };

  return (
    <>
      <div className="container ">
        <div class="overflow-y-scroll h-96">
          {breakingNews &&
            breakingNews.map((item, index) => (
              <div key={index} className="flex">
                <div className="justify-start">
                  <div className="relative h-3   w-3 rounded">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669182584/icons8-filled-circle-16_pwwurk.webp"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                      unoptimized={true}
                    />
                  </div>
                  <div class=" border-l-2 border-gray-300 h-[85px] ml-[5px]"></div>
                </div>

                <div className="px-3 ">
                  <div className="pb-2  text-xs text-gray-400">
                    {convert(item.createdAt)}
                  </div>
                  <Link href={`/post/${item.slug}`}>
                    <div className="text-sm line-clamp-3 cursor-pointer">
                      {item.title}
                    </div>
                  </Link>
                  <div className="h-[2px] w-80 my-1 float-right bg-gray-300 mt-3"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Rightcard;
