import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPostByCategory } from "../../redux/slice/postsSlice";
import Mline from "../cards/Mline";
import PlyCard from "../cards/PlyCard";
import PlyCard2 from "../cards/PlyCard2";

const rightData = [
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
const leftData = [
  {
    title:
      "Vastu Tips दूर करना चाहते है गरीबी तो हर रोज सोने से पहले ये जरूर करें",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719742/special-vastu_tips_khfln6.jpg",
  },
  {
    title:
      "Budhaditya Rajyog (Dec.2022)- बुधादित्य राजयोग का निर्माण, इन राशि वालों को देगा विशेष लाभ",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719746/bhudhaditya_yog_kla6ng.jpg",
  },
  {
    title: "ऐसे पहचानें भगवान शिव की कृपा के इशारे",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719752/lord_shiv_blessings_jwqsrf.jpg",
  },
  {
    title: "नीम करौली: अलौकिक वादियों में एक चमत्कारिक धाम",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719756/kainchi_dham-deepesh_tiwari_hdaz9j.jpg",
  },
];

function Astrology() {
  const { data: categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [astroActiveCategory, setAstroActiveCategory] = useState(
    categories[35].title
  );
  const [astroNewsArr, setAstroNewsArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await dispatch(searchPostByCategory(astroActiveCategory));
      // console.log("🔥🔥🔥🔥🔥", result);
      setAstroNewsArr(result);
    };
    fetchData();
  }, [astroActiveCategory]);
  return (
    <>
      <div className="container mx-auto mt-20 ">
        <div className="my-10">
          <Mline
            categories={categories}
            setAstroActiveCategory={setAstroActiveCategory}
            parent={"Astrology"}
            data={{ name: "ज्योतिष" }}
          />
        </div>
        <div className="grid grid-cols-9 gap-4 ">
          <div className="col-span-9 sm:col-span-9 md:col-span-6">
            {" "}
            <PlyCard
              astroNewsArr={astroNewsArr}
              plyCard1Data={astroNewsArr}
              parent={"Astrology"}
              data={leftData}
              start={0}
              end={4}
            />{" "}
          </div>
          <div className="col-span-9 sm:col-span-9 md:col-span-3 border-l-2 border-gray-300">
            {" "}
            <PlyCard2
              // astroNewsArr={astroNewsArr}
              plyCardData={astroNewsArr && astroNewsArr.slice(4, 10)}
              parent={"Astrology"}
              data={rightData}
              start={0}
              end={6}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Astrology;
