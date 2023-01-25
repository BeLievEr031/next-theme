import React from "react";
import Image from "next/image";
import Link from "next/link";
function PlyCard2({
  parent,
  playNewsArr,
  breakingNews,
  entertainmentNewsArr,
  autoMobileNewsArr,
  bussinessNewsArr,
  plyCardData,
  start,
  end,
}) {
  // console.log(plyCardData);

  return (
    <>
      <div className="sm:px-3">
        {/* {
          plyCardData && plyCardData.length === 0 
        } */}

        {breakingNews &&
          breakingNews.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                    <div>
                      <Link href={"/post/k"}>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/post/k"}>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="  border-b-2 border-gray-300 my-3"></div>
                </div>
              );
            } else {
              return null;
            }
          })}

        {/* {playNewsArr &&
          parent === "Plays" &&
          playNewsArr.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                    <div>
                      <Link href={"/post/k"}>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/post/k"}>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="  border-b-2 border-gray-300 my-3"></div>
                </div>
              );
            } else {
              return null;
            }
          })} */}

        {/* {autoMobileNewsArr &&
          parent === "Automobile" &&
          autoMobileNewsArr.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                    <div>
                      <Link href={"/post/k"}>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/post/k"}>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="  border-b-2 border-gray-300 my-3"></div>
                </div>
              );
            } else {
              return null;
            }
          })} */}

        {/* {bussinessNewsArr &&
          parent === "Bussiness" &&
          bussinessNewsArr.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                    <div>
                      <Link href={"/post/k"}>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/post/k"}>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="  border-b-2 border-gray-300 my-3"></div>
                </div>
              );
            } else {
              return null;
            }
          })} */}

        {/* {bussinessNewsArr &&
          parent === "Astrology" &&
          bussinessNewsArr.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                    <div>
                      <Link href={"/post/k"}>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                    <div>
                      <Link href={"/post/k"}>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="  border-b-2 border-gray-300 my-3"></div>
                </div>
              );
            } else {
              return null;
            }
          })} */}

        {(plyCardData &&
          plyCardData.length > 0 &&
          plyCardData.map((item, index) => {
            if (index >= start && index < end) {
              return (
                <div key={index} className=" sm:mx-0">
                  <Link href={`/post/${item.slug}`}>
                    <div className="flex gap-2 justify-between  hover:cursor-pointer ">
                      <div>
                        <h4 className="line-clamp-3  font-normal text-sm ">
                          {item.title}
                        </h4>
                      </div>
                      <div>
                        <div className="w-28 aspect-video relative">
                          <Image
                            src={item.thumbnail}
                            alt="img"
                            layout="fill"
                            className="absolute "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="  border-b-2 border-gray-300 my-3"></div>
                  </Link>
                </div>
              );
            } else {
              return null;
            }
          })) || <h1>Nothin to show here....</h1>}
      </div>
    </>
  );
}

export default PlyCard2;
