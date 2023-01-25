import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slice/postsSlice";
import CityC1 from "../cards/CityC1";
import Oneline from "../cards/Oneline";
import PlyCard2 from "../cards/PlyCard2";
import Rightcard from "../cards/Rightcard";
import WorldC2 from "../cards/WorldC2";

const firstData = [
  {
    title:
      "Rojgar Mela 2022: दूसरा रोजगार मेला आज, PM नरेंद्र मोदी 71 हजार उम्मीदवारों को देंगे अपॉइंटमेंट लेटर",
    imgurl:
      "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg",
  },
  {
    title:
      "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
    imgurl:
      "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp",
  },
  {
    title:
      "Rojgar Mela 2022: दूसरा रोजगार मेला आज, PM नरेंद्र मोदी 71 हजार उम्मीदवारों को देंगे अपॉइंटमेंट लेटर",
    imgurl:
      "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669113445/rozgar-mela-pm-to-hand-over-appointment-letters-to-71-000-recruits-on-tuesday_ncnpyy.jpg",
  },
  {
    title:
      "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
    imgurl:
      "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp",
  },
];
const rightData = [
  {
    title:
      "दिल्ली में आज बारिश, जानें आपके शहर की रहने वाली मौसम  तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़ तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
    time: "33m mins ago",
  },
  {
    title:
      "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़ तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़ तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
    time: "53m mins ago",
  },
  {
    title:
      "woman slipper stolen by a snake watch viral video | Video: घर में घुस रहा था कोबरा तो महिला ने चप्पल फेंककर मारी, मुंह में चप्पल दबाकर भाग गया सांप | Patrika News",
    time: "1h ago",
  },
  {
    title:
      "ऋतुराज गायकवाड़ ने एक ओवर में 7 छक्के जड़कर बनाया विश्व रिकॉर्ड, युवराज को भी छोड़ा पीछे",
    time: "10 mins ago",
  },
];

function World() {
  const { data } = useSelector((state) => state.posts);

  console.log(data);

  return (
    <>
      <div className="container mx-auto mt-20 ">
        <Oneline data={{ name: "विश्व " }} />
        <div className="grid grid-cols-12 gap-5 mt-10">
          <div className="col-span-12 md:col-span-4 ">
            <div className="lg:block hidden">
              <CityC1 cardData={data.length > 0 && data}></CityC1>
            </div>

            <PlyCard2
              plyCardData={data.length > 0 ? data.slice(1, 3) : ""}
              data={firstData}
              start={0}
              end={2}
            />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
            <WorldC2 worldCardData={data && data.slice(15, 19)} />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
            <Rightcard
              breakingNews={data && data.slice(6, 15)}
              data={rightData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default World;
