import React from "react";
import { useSelector } from "react-redux";

const rightdata = [
  {
    id: 1,
    title:
      "1 Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप",
  },
  {
    id: 2,
    title:
      "2 Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप",
  },
  {
    id: 3,
    title:
      "3 Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप",
  },
  {
    id: 4,
    title:
      "4 Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप",
  },
  {
    id: 5,
    title:
      "5 Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप",
  },
];

function DCard2(props) {
  const { mostViewPost } = useSelector((state) => state.posts);
  return (
    <>
      <div className="">
        <div className="border-t-2 border-gray-300  "></div>
        <div className="bg-white w-28 text-center -m-3 mx-auto font-bold text-lg text-black">
          सबसे लोकप्रिय
        </div>
        {mostViewPost &&
          mostViewPost.map((item, index) => {
            if (index < 5) {
              return (
                <div key={index} className=" flex gap-5 lg:gap-2 my-5">
                  <div className="text-red-500 font-bold text-xl">
                    {index + 1}
                  </div>
                  <div className="border-b w-full">{item.title}</div>
                  <hr />
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </>
  );
}

export default DCard2;
