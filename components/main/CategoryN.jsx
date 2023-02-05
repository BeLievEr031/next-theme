import React, { useEffect } from "react";
import Image from "next/image";
import Oneline from "../cards/Oneline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getMostViewPost } from "../../redux/slice/postsSlice";
function CategoryN() {
  const dispatch = useDispatch();
  const { mostViewPost } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getMostViewPost());
  }, []);
  return (
    <>
      <div className="container m-auto my-20 ">
        <div className=" flex gap-3 flex-wrap justify-evenly">
          {mostViewPost.length > 0 && (
            <div className="w-[300px] h-full border px-3">
              <div className="">
                <div className="my-10">
                  <Oneline data={{ name: "स्‍पेशल" }} />
                </div>
                <div className=" ">
                  <Link href={`/post/${mostViewPost[0].slug}`}>
                    <div className="relative h-[11rem] w-[18rem] hover:cursor-pointer ">
                      <Image
                        // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718084/bandikui_tqohjv.jpg"
                        src={mostViewPost[0].thumbnail}
                        objectFit="strech"
                        layout="fill"
                        className="absolute"
                        alt="img"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                  <div className="cursor-pointer">
                    {mostViewPost.map((item, index) => {
                      if (index < 3) {
                        return (
                          <div key={index}>
                            <Link href={`/post/${item.slug}`}>
                              {item.title} <br />{" "}
                            </Link>
                            <div className="  border-b-2 border-gray-300 my-3"></div>
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {mostViewPost.length >= 3 && (
            <div className="w-[300px] h-full border px-3">
              <div className="">
                <div className="my-10">
                  <Oneline data={{ name: "स्‍पेशल" }} />
                </div>
                <div className=" ">
                  <Link href={`/post/${mostViewPost[3].slug}`}>
                    <div className="relative h-[11rem] w-[18rem] hover:cursor-pointer ">
                      <Image
                        // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718084/bandikui_tqohjv.jpg"
                        src={mostViewPost[3].thumbnail}
                        objectFit="strech"
                        layout="fill"
                        className="absolute"
                        alt="img"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                  <div className="cursor-pointer">
                    {mostViewPost.map((item, index) => {
                      if (index > 2 && index < 6) {
                        return (
                          <div key={index}>
                            <Link href={`/post/${item.slug}`}>
                              {item.title} <br />{" "}
                            </Link>
                            <div className="  border-b-2 border-gray-300 my-3"></div>
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {mostViewPost.length >= 6 && (
            <div className="w-[300px] h-full border px-3">
              <div className="">
                <div className="my-10">
                  <Oneline data={{ name: "स्‍पेशल" }} />
                </div>
                <div className=" ">
                  <Link href={`/post/${mostViewPost[6].slug}`}>
                    <div className="relative h-[11rem] w-[18rem] hover:cursor-pointer ">
                      <Image
                        // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718084/bandikui_tqohjv.jpg"
                        src={mostViewPost[6].thumbnail}
                        objectFit="strech"
                        layout="fill"
                        className="absolute"
                        alt="img"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                  <div className="cursor-pointer">
                    {mostViewPost.map((item, index) => {
                      if (index > 5 && index < 9) {
                        return (
                          <div key={index}>
                            <Link href={`/post/${item.slug}`}>
                              {item.title} <br />{" "}
                            </Link>
                            <div className="  border-b-2 border-gray-300 my-3"></div>
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {mostViewPost.length >= 9 && (
            <div className="w-[300px] h-full border px-3">
              <div className="">
                <div className="my-10">
                  <Oneline data={{ name: "स्‍पेशल" }} />
                </div>
                <div className=" ">
                  <Link href={`/post/${mostViewPost[9].slug}`}>
                    <div className="relative h-[11rem] w-[18rem] hover:cursor-pointer ">
                      <Image
                        // src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718084/bandikui_tqohjv.jpg"
                        src={mostViewPost[9].thumbnail}
                        objectFit="strech"
                        layout="fill"
                        className="absolute"
                        alt="img"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                  <div className="cursor-pointer">
                    {mostViewPost.map((item, index) => {
                      if (index > 8 && index < 12) {
                        return (
                          <div key={index}>
                            <Link href={`/post/${item.slug}`}>
                              {item.title} <br />{" "}
                            </Link>
                            <div className="  border-b-2 border-gray-300 my-3"></div>
                          </div>
                        );
                      } else {
                        return false;
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryN;
