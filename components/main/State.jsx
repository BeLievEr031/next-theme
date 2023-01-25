import React from "react";
import Oneline from "../cards/Oneline";
import Image from "next/image";
import Link from "next/link";




function State() {
  return (
    <>
      <div className="container m-auto mt-10">
        <div className="">
          <Oneline data={{ name: 'राज्य'}} />
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          
          <div className="w-[390px] border   ">
            <div className="flex justify-between my-3">
              <div className="">राजस्थान</div>
              <div className="rounded-full flex justify-end border-2 border-gray-300   bg-gray-100 w-12 items-center  ">
                <div className="w-8 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="sm:px-2">
              <div className=" my-5">
                <Link href={"/post/k"}>
                <div className="relative h-[14rem]  hover:cursor-pointer ">
                  <Image
                    src=    "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717539/pomegranate_xkif0v.jpg"

                    objectFit="strech"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="img"
                  />
                </div>
                <div className="text-xl font-bold   text=[1.100rem]">
                  <div className=" cursor-pointer line-clamp-3">
                  राजस्थान में यहां अनार की बम्पर पैदावार, एक हेक्टेयर में 30 टन फल लगे
                  </div>
                </div>
                </Link>
              </div>
              <div className=" flex gap-6 ">
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="absolute "
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              
           
            </div>
          </div>
          <div className="w-[390px] border   ">
            <div className="flex justify-between my-3">
              <div className="">राजस्थान</div>
              <div className="rounded-full flex justify-end border-2 border-gray-300   bg-gray-100 w-12 items-center  ">
                <div className="w-8 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="sm:px-2">
              <div className=" my-5">
                <Link href={"/post/k"}>
                <div className="relative h-[14rem]  hover:cursor-pointer ">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717552/bhagwat_katha_of_pandit_dhirendra_shastri_c96jx9.jpg"

                    objectFit="strech"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="img"
                  />
                </div>
                <div className="text-xl font-bold   text=[1.100rem]">
                  <div className=" cursor-pointer line-clamp-3">
                  पंडित धीरेंद्र शास्त्री की कथा में दो लाख लोग, एक हजार लीटर दूध डेढ़ क्विंटल शक्कर की खीर बांटी
                  </div>
                </div>
                </Link>
              </div>
              <div className=" flex gap-6 ">
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="absolute "
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              
           
            </div>
          </div>
          <div className="w-[390px] border   ">
            <div className="flex justify-between my-3">
              <div className="">राजस्थान</div>
              <div className="rounded-full flex justify-end border-2 border-gray-300   bg-gray-100 w-12 items-center  ">
                <div className="w-8 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="sm:px-2">
              <div className=" my-5">
                <Link href={"/post/k"}>
                <div className="relative h-[14rem]  hover:cursor-pointer ">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717547/ramcoverpic_h71ck2.jpg"
                    

                    objectFit="strech"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="img"
                  />
                </div>
                <div className="text-xl font-bold   text=[1.100rem]">
                  <div className=" cursor-pointer line-clamp-3">
                  तस्वीरें: फूलों से सजी अयोध्या, राम-सीता का हुआ विवाह
                  </div>
                </div>
                </Link>
              </div>
              <div className=" flex gap-6 ">
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="absolute "
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[5rem]  hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              
           
            </div>
          </div>
          {/* <div className="w-[400px] border  px-5 ">
            <div className="flex justify-between my-3">
              <div className="">राजस्थान</div>
              <div className="rounded-full flex justify-end border-2 border-gray-300   bg-gray-100 w-12 items-center  ">
                <div className="w-8 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="">
              <div className=" my-5">
                <Link href={"/post/k"}>
                <div className="relative h-[13rem] w-[22rem] hover:cursor-pointer ">
                  <Image
                    src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp"
                    objectFit="strech"
                    layout="fill"
                    className="w-fit h-fit"
                    alt="img"
                  />
                </div>
                <div className="text-xl font-bold   text=[1.100rem]">
                  <div className=" cursor-pointer line-clamp-3">
                    Lorem ipsum dolor sit, amet conse ctetur adipisicing elit.
                    Exercitationem distinctio non ad veniam laudantium eligendi.
                  </div>
                </div>
                </Link>
              </div>
              <div className=" flex gap-6 ">
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative aspect-video h-[7rem] w-[10rem] hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="absolute "
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="h-full flex flex-col flex-wrap justify-start">
                  <Link href={"/post/k"}>
                  <div className="relative h-[7rem] w-[10rem] hover:cursor-pointer mb-3 ">
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg"
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
                  </div>
                  <div className="text-normal font-normal pb-2">
                    <div className=" cursor-pointer line-clamp-3">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis? Fuga rerum excepturi saepe perspiciatis.
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
              
           
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default State;
