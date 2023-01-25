import React from "react";
import Image from "next/image";
import Link from "next/link";
function EtmCard({ etmCardData, data, start, end }) {
  // console.log(data);
  return (
    <div>
      {(etmCardData && etmCardData.length > 0 && (
        <div className="container m-auto">
          <div className=" flex flex-wrap  gap-9 items-start  justify-center">
            <div className="grid grid-cols-2 gap-7 ">
              {etmCardData && etmCardData.length > 0 && (
                <div className="col-span-2 md:col-span-1">
                  <div className=" sm:w-[370px]">
                    <Link href={`/post/${etmCardData[0].slug}`}>
                      <div className="relative  h-[13rem]  lg:h-[13rem] lg:w-[21rem] xl:h-[13rem] xl:w-[24rem] hover:cursor-pointer ">
                        <Image
                          src={
                            etmCardData &&
                            etmCardData.length > 0 &&
                            etmCardData[0].thumbnail
                          }
                          objectFit="strech"
                          layout="fill"
                          className="w-fit h-fit"
                          alt="img"
                        />
                      </div>
                      <div className="text-xl font-bold   text=[1.100rem]">
                        <div className=" cursor-pointer line-clamp-3">
                          {etmCardData &&
                            etmCardData.length > 0 &&
                            etmCardData[0].title}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
              {etmCardData && etmCardData.length > 1 && (
                <div className="col-span-2 md:col-span-1">
                  <div className=" sm:w-[370px]">
                    <Link href={`/post/${etmCardData[1].slug}`}>
                      <div className="relative h-[13rem]  lg:h-[13rem] lg:w-[21rem] xl:h-[13rem] xl:w-[24rem] hover:cursor-pointer ">
                        <Image
                          src={etmCardData[1].thumbnail}
                          objectFit="strech"
                          layout="fill"
                          className="w-fit h-fit"
                          alt="img"
                        />
                      </div>
                      <div className="text-xl font-bold   text=[1.100rem]">
                        <div className=" cursor-pointer line-clamp-3">
                          {etmCardData[1].title}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* ************************************************************** */}
            {etmCardData &&
              etmCardData.map((item, index) => {
                if (index >= start && index < end) {
                  return (
                    <div key={index} className="w-[240px] ">
                      <div className="h-full flex flex-col flex-wrap justify-start">
                        <Link href={"/post/k"}>
                          <div className="relative h-[8rem] w-[15rem] hover:cursor-pointer mb-3 ">
                            <Image
                              src={item.thumbnail}
                              objectFit="strech"
                              layout="fill"
                              className="w-fit h-fit"
                              alt="img"
                            />
                          </div>
                          <div className="text-normal font-normal pb-2">
                            <div className=" cursor-pointer line-clamp-3">
                              {item.title}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
          </div>
        </div>
      )) || <h1 className="text-center">Nothing to show here...</h1>}
    </div>
  );
}

export default EtmCard;
