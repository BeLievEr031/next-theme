import React from "react";
import Oneline from "../cards/Oneline";
import PlyCard2 from "../cards/PlyCard2";
import Rightcard from "../cards/Rightcard";
import Image from "next/image";
import CityC1 from "../cards/CityC1";

const rightData = [
  {
    title:
      "रिजेजू के बयान पर सुप्रीम कोर्ट ने कहा- 'ऐसा नहीं होना चाहिए",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718699/sc_y2v3xq.jpg",
  },
  {
    title:
      "DU PG Admission: डीयू की पहली पीजी एडमिशन लिस्ट 30 नवंबर को होगी जारी, जानिए किस तारीख से कर सकेंगे आवेदन? ",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718705/du01_kw9yd7.jpg",
  },
  {
    title:
      "राहुल बोले: कांग्रेस के लिए अशोक गहलोत और सचिन पायलट एसेट्स",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718711/rahul_zezj8e.jpg",
  },
  {
    title:
      "Earthquake Turkey: तुर्की में आया जोरदार भूकंप, राजधानी अंकारा में धूजी धरती, घर छोड़",
    imgurl:
      "https://res.cloudinary.com/dizhwrjyc/image/upload/v1669179047/earthqwack_usqw3o.webp",
  },
];

function CityN() {
  return (
    <>
      <div className="container m-auto mt-20 ">
        <Oneline  data={{ name: 'दिल्ली '}} />
        <div className="grid grid-cols-12 gap-5 mt-8">
          <div className="col-span-12 md:col-span-8 lg:col-span-4">
          <CityC1 />
          </div>
          <div className="col-span-12 md:col-span-4">
          
            <PlyCard2 data={rightData} />
          </div>
          <div className="col-span-12 lg:col-span-4 ">
            <PlyCard2 data={rightData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CityN;
