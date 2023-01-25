import React, { useEffect } from "react";
import DCard2 from "../cards/DCard2";
import DetailsP from "../cards/DetailsP";

function DPage({ post }) {
  // useEffect(()=>{
  //   // console.log(post);
  // },[post])
  return (
    <>
      <div className="container m-auto  mt-10">
        <div className="grid grid-cols-11 gap-5 ">
          <div className="lg:col-span-8 md:col-span-11 sm:col-span-11 col-span-11">
           { post && <DetailsP post={post}/>}
          </div>

          <div className="lg:col-span-3 md:col-span-11 sm:col-span-11 col-span-11">
            <div className=" sticky top-48 ">
              <div className="mt-3">{/* <Add3 /> */}</div>
              <DCard2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DPage;
