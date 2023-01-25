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
      "मारुति स्विफ्ट को कड़ी टक्कर देगी नई हुंडई Grand i10 Nios फेसलिफ्ट! जानिये कब होगी लॉन्च",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719461/2023_hyundai_i20_n8il6e.jpg",
  },
  {
    title:
      "टाटा की सबसे ज्यादा बिकने वाली इस सस्ती SUV के 68 वेरिएंट्स हुए महंगे! जानिये नई कीमतें",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719465/tata_nexon_price_hiked_pc1dce.jpg",
  },
  {
    title:
      "हाइब्रिड इंजन के साथ आएगा नया होंडा एक्टिवा 7G! जानिये कब होगा लॉन्च",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719473/honda_activa_7g_brglpj.jpg",
  },
  {
    title:
      "फीचर्स के मामले में Maruti Baleno को पीछे छोड़ देती है यह कार, हैवी ट्रैफिक में नही होती थकान!",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719476/hyundai_i20_cabin_1_hiqumh.jpg",
  },
];

function Automobile() {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);
  const [autoMoblieActiveCategory, setAutoMoblieActiveCategory] = useState(
    categories[21].title
  );
  const [autoMobileNewsArr, setAutoMobileNewsArr] = useState([]);
  // const { breakingNew } = useSelector((state) => state.posts);

  useEffect(() => {
    const fetchData = async () => {
      let result = await dispatch(
        searchPostByCategory(autoMoblieActiveCategory)
      );
      // console.log("🔥🔥🔥🔥🔥", result);
      setAutoMobileNewsArr(result);
    };
    fetchData();
  }, [autoMoblieActiveCategory]);

  return (
    <>
      <div className="container mx-auto mt-20 ">
        <div className="my-10">
          <Mline
            categories={categories}
            parent={"Automobile"}
            data={{ name: "ऑटोमोबाइल" }}
            setAutoMoblieActiveCategory={setAutoMoblieActiveCategory}
          />
        </div>
        <div className="grid grid-cols-9 gap-4 ">
          <div className="col-span-9 sm:col-span-9 md:col-span-6">
            {" "}
            <PlyCard
              autoMobileNewsArr={autoMobileNewsArr}
              plyCard1Data={autoMobileNewsArr}
              parent={"Automobile"}
              data={leftData}
              start={0}
              end={4}
            />{" "}
          </div>
          <div className="col-span-9 sm:col-span-9 md:col-span-3 border-l-2 border-gray-300">
            {" "}
            <PlyCard2
              autoMobileNewsArr={autoMobileNewsArr}
              plyCardData={autoMobileNewsArr && autoMobileNewsArr.slice(4, 10)}
              parent={"Automobile"}
              data={rightData}
              start={0}
              end={7}
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Automobile;
