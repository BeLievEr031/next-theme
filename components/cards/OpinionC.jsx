import React from "react";
import Image from "next/image";
import Oneline from "./Oneline";
import Mline from "./Mline";
import Link from "next/link";
function OpinionC() {
  return (
    <>
      <div className="container mt-20 m-auto">
        <Mline data={{ name: "ओपिनियन" }} />

        {/* cards  */}
        <div className=" mt-20 flex gap-5 overflow-x-hidden flex-wrap justify-center">
          <div className="border-2 border-gray-500 w-64 p-5">
            <Link href={"/post/k"}>
            <div className="text-[0.938rem] cursor-pointer line-clamp-2">
              Patrika Opinion: अवसरों से वंचित कर रहा है लैंगिक भेदभाव
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[font-size: 0.813rem] cursor-pointer font-bold text-red-500">Patrika Desk</div>
              <div className="relative h-[1.813rem] cursor-pointer w-[2rem] hover:cursor-pointer rounded-full">
              
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669197474/Patrika_1637650009_buyiia.webp"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
              </div>
            </div>
            </Link>
          </div>
          <div className="border-2 border-gray-500 w-64 p-5">
            <Link href={"/post/k"}>
            <div className="text-[0.938rem] cursor-pointer line-clamp-2">
              Patrika Opinion: अवसरों से वंचित कर रहा है लैंगिक भेदभाव
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[font-size: 0.813rem] cursor-pointer font-bold text-red-500">Patrika Desk</div>
              <div className="relative h-[1.813rem] cursor-pointer w-[2rem] hover:cursor-pointer rounded-full">
              
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669197474/Patrika_1637650009_buyiia.webp"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
              </div>
            </div>
            </Link>
          </div>
          <div className="border-2 border-gray-500 w-64 p-5">
            <Link href={"/post/k"}>
            <div className="text-[0.938rem] cursor-pointer line-clamp-2">
              Patrika Opinion: अवसरों से वंचित कर रहा है लैंगिक भेदभाव
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[font-size: 0.813rem] cursor-pointer font-bold text-red-500">Patrika Desk</div>
              <div className="relative h-[1.813rem] cursor-pointer w-[2rem] hover:cursor-pointer rounded-full">
              
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669197474/Patrika_1637650009_buyiia.webp"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
              </div>
            </div>
            </Link>
          </div>
          <div className="border-2 border-gray-500 w-64 p-5">
            <Link href={"/post/k"}>
            <div className="text-[0.938rem] cursor-pointer line-clamp-2">
              Patrika Opinion: अवसरों से वंचित कर रहा है लैंगिक भेदभाव
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-[font-size: 0.813rem] cursor-pointer font-bold text-red-500">Patrika Desk</div>
              <div className="relative h-[1.813rem] cursor-pointer w-[2rem] hover:cursor-pointer rounded-full">
              
                    <Image
                      src="https://res.cloudinary.com/dizhwrjyc/image/upload/v1669197474/Patrika_1637650009_buyiia.webp"
                      objectFit="contain"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                    />
              </div>
            </div>
            </Link>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

export default OpinionC;
