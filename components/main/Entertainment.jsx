import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPostByCategory } from "../../redux/slice/postsSlice";
import EtmCard from "../cards/EtmCard";
import Mline from "../cards/Mline";
import PlyCard from "../cards/PlyCard";
import PlyCard2 from "../cards/PlyCard2";

const rightData = [
  {
    title:
      "एक्ट्रेस मृणाल ठाकुर ने कबूला, 'हां, क्रिकेटर के प्यार में पागल थी मैं' जानें कौन है 'वो'",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717409/mrunal_takur_e4qimm.jpg",
  },
  {
    title:
      "शादी की अफवाह के बीच सिद्धार्थ और कियारा ने तोड़ा फैंस का दिल, सामने आई बड़ी वजह",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717414/sidharth_malhotra_kiara_advani_wedding_rumours_cdnern.jpg",
  },
  {
    title: "जोरम से मनोज बाजपेयी का फर्स्ट लुक, छलक पड़े इमोशंस",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717420/screenshot_from_2022-11-29_14-13-26_zafbde.jpg",
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
      "मलाइका हूं.. मलाला नहीं! अपने ही शो के स्क्रिप्ट राइटर्स पर भड़कीं मलाइका अरोड़ा, देखें प्रोमो",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717224/malaika_arora_reality_show_moving_in_with_malaika_promo_released_x4kvlw.jpg",
  },
  {
    title: "अनन्या पांडे के इस जल परी जैसे लुक पर दिल हार बैठेंगे आप",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717231/a_god1un.jpg",
  },
  {
    title:
      "सलमान खान के शो बिग बॉस में 'गोल्डन बॉयज' ने मारी धांसू एंट्री, जारी हुआ वीडियो",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717240/golden_boys_enter_salman_khan_show_bigg_boss_16_video_released_nmfphc.jpg",
  },
  {
    title:
      "अरबाज खान का गर्लफ्रेंड के साथ हुआ ब्रेकअप! जॉर्जिया एंड्रियानी ने कहा- 'हम बस दोस्त हैं'",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669717249/jhkh_btejzq.jpg",
  },
];

function Entertainment() {
  const { data: categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [entertainmentActiveCategory, setEntertainmentActiveCategory] =
    useState(categories[7].title);
  const [entertainmentNewsArr, setEntertainmentNewsArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result;
      if (entertainmentActiveCategory !== null) {
        result = await dispatch(
          searchPostByCategory(entertainmentActiveCategory)
        );
      }
      // console.log("🔥🔥🔥🔥🔥", result);
      setEntertainmentNewsArr(result ? [...result] : []);
    };
    fetchData();
  }, [entertainmentActiveCategory]);
  return (
    <div className="container m-auto mt-20 ">
      <div className="">
        <Mline
          setEntertainmentActiveCategory={setEntertainmentActiveCategory}
          categories={categories}
          parent={"Entertainment"}
          data={{ name: "मनोरंजन" }}
        />
      </div>
      <div className="grid grid-cols-9 gap-4 my-10">
        <div className="col-span-9 lg:col-span-6">
          {" "}
          <EtmCard
            etmCardData={entertainmentNewsArr}
            data={leftData}
            start={2}
            end={5}
          />{" "}
        </div>
        <div className="col-span-9 lg:col-span-3 sm:border-l-2 sm:border-gray-300">
          {" "}
          <PlyCard2
            // entertainmentNewsArr = {entertainmentNewsArr}
            // playNewsArr={entertainmentNewsArr}
            plyCardData={
              entertainmentNewsArr && entertainmentNewsArr.slice(4, 10)
            }
            data={rightData}
            start={0}
            end={7}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Entertainment;
