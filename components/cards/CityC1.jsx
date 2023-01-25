import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function CityC1({ cardData }) {
  useEffect(() => {
    console.log("🔥🔥🔥🔥",cardData);
  }, [cardData]);

  return (
    <>
      {(cardData && cardData.length > 0 && (
        <div className="">
          <Link href={`/post/${cardData[0].slug}`}>
            <div
              onClick={() => console.log(cardData)}
              className="relative m-auto h-[14rem]  md:h-[14rem] md:w-[31rem] lg:h-[16rem] lg:w-[20rem] xl:h-[14rem] xl:w-[25rem] hover:cursor-pointer "
            >
              <Image
                // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718621/photo_29_lxsy64.webp"
                src={cardData[0].thumbnail}
                objectFit="strech"
                layout="fill"
                className="w-fit h-fit"
                alt="img"
              />
            </div>
            <div className="text-xl font-bold sm:text-left text-start sm:pl-2 text=[1.100rem]">
              <div className=" cursor-pointer line-clamp-3">
                {cardData[0].title}
              </div>
            </div>
          </Link>
        </div>
      )) || <h1>Nothing to show here...</h1>}
    </>
  );
}

export default CityC1;
