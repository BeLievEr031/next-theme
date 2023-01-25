import React, { useEffect } from "react";
import Oneline from "../cards/Oneline";
import PlyCard2 from "../cards/PlyCard2";
import { useDispatch, useSelector } from "react-redux";
import { getAllBreakingNews } from "../../http";

const leftData = [
  {
    title:
      "कांग्रेस नेता के घर बड़ी चोरी, लाखों रुपए नगद और लाखों का सोना - चांदी लेकर चोर फरार",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719958/chori_vf6pi9.jpg",
  },
  {
    title: "घाटगेट है रामपोल, जहां भरत का राम से मिलाप होता था",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719963/ghat_gate_y0ukqt.jpg",
  },
  {
    title:
      "वित्त मंत्री निर्मला सीतारमन ने भोपाल में की अहम बैठक, सीएम शिवराज ने रखे कई मुद्दे",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719968/sitaraman_vhyred.jpg",
  },
  {
    title:
      "कांग्रेस नेता के घर बड़ी चोरी, लाखों रुपए नगद और लाखों का सोना - चांदी लेकर चोर फरार",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719958/chori_vf6pi9.jpg",
  },
];
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
const middleData = [
  {
    title:
      "IND vs NZ : अर्शदीप सिंह ने बताया तीसरे वनडे के लिए टीम इंडिया का प्लान",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669720169/ind-vs-nz-3rd-odi-arshdeep-singh-told-plan-of-team-india-for-3rd-odi_y0gnji.jpg",
  },
  {
    title:
      "पटरी पर मोबाइल से कर रही थी बॉयफ्रेंड को कॉल, ऊपर से गुजर गई ट्रेन, फिर भी नहीं",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669720173/woman111_lyggji.jpg",
  },
  {
    title: "TN Governor : लाभ के पद पर हैं राज्यपाल, अयोग्य ठहराए जाएं",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669720178/photo6049819658619563857_itn23r.jpg",
  },
  {
    title: "भारत-अमेरिकी सेना युद्धाभ्यास में कुत्ते ने जीता सबका दिल",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669720279/yuddh_abhyas_b89qv8.jpg",
  },
];

function LatestN() {
  const { breakingNew } = useSelector((state) => state.posts);

  return (
    <>
      <div className="container m-auto mt-20 ">
        <div className="" onClick={() => console.log(breakingNew)}>
          <Oneline data={{ name: "ताज़ाखबरें" }} />
        </div>
        <div className="grid grid-cols-9 gap-5 mt-10">
          <div className="col-span-9 sm:col-span-4 md:col-span-3 border-l-2 border-gray-300">
            {breakingNew.length > 0 && (
              <PlyCard2
                plyCardData={breakingNew && breakingNew.slice(0, 4)}
                data={leftData}
                start={0}
                end={4}
              />
            )}
          </div>
          <div className="col-span-9 sm:col-span-4 md:col-span-3 border-l-2 border-gray-300">
            {breakingNew.length > 0 && (
              <PlyCard2
                plyCardData={breakingNew && breakingNew.slice(4, 8)}
                data={leftData}
                start={0}
                end={4}
              />
            )}
          </div>
          <div className="col-span-9 md:col-span-3 border-l-2 border-gray-300">
            {breakingNew.length > 0 && (
              <PlyCard2
                // breakingNews={breakingNew}
                plyCardData={breakingNew && breakingNew.slice(8, 12)}
                data={leftData}
                start={0}
                end={4}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestN;
