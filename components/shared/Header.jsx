import React from "react";
import Image from "next/image";
import Hidenave from "../cards/Hidenave";
import { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
function Header() {
  const { data: categories } = useSelector((state) => state.category);
  const [smnav, setSmnav] = useState(false);
  const closeToggle = () => {
    setSmnav(false);
  };

  return (
    <>
      <div>{smnav ? <Hidenave nav={closeToggle} /> : null}</div>

      <div>
        <div className="bg-blue-800 ">
          <div className="grid grid-cols-12  ">
            <div className="col-span-2 md:col-span-1">
              <div className="flex justify-center p-1">
                <div
                  className="stroke-white w-10 text-center cursor-pointer transition-all "
                  onClick={() => setSmnav(true)}
                >
                  <svg className="ionicon" viewBox="0 0 512 512">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-7 md:col-span-1  p-3">
              <div
                className="relative h-7 w-44 sm:w-38 md:w-32 aspect-video
             hover:cursor-pointer text-white bg-blue-800 "
              >
                <Link href={"/"}>
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669721289/9-news-logo-png-transparent_nseveb.png"
                    objectFit="contain"
                    layout="fill"
                    className="absolute w-fit h-fit"
                    alt="abt img"
                    unoptimized={true}
                  />
                </Link>
              </div>
            </div>
            <div className="ml-3 col-span-9 md:block hidden">
              <div className="flex justify-center text-white font-semibold capitalize">
                {categories.length > 0 &&
                  categories.map((item, index) => {
                    if (index < 11) {
                      return (
                        <div
                          className="cool-link p-3 cursor-pointer"
                          key={index}
                        >
                          {item.title}
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                {/* <div className="cool-link p-3 cursor-pointer">राजनीति</div>
                <div className="cool-link p-3 cursor-pointer">वीडियो</div>
                <div className=" cool-link p-3 cursor-pointer">राज्य</div>
                <div className="cool-link p-3 cursor-pointer">ओपिनियन</div>
                <div className="cool-link p-3 cursor-pointer">मनोरंजन</div>
                <div className="cool-link p-3 cursor-pointer">गैजेट</div>
                <div className="cool-link p-3 cursor-pointer">तस्वीरें</div>
                <div className="cool-link p-3 cursor-pointer">विश्व</div>

                <div className="cool-link p-3 cursor-pointer">बिजनेस</div>
                <div className="cool-link p-3 cursor-pointer">खेल</div>
                <div className="cool-link p-3 cursor-pointer">शिक्षा</div> */}
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              {/* <div className="flex md:justify-center justify-end align-middle p-2">
                <div className="w-7  stroke-white fill-blue-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M338.29 338.29L448 448"
                    ></path>
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
