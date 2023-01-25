import React, { useEffect, useState } from "react";
import Oneline from "../cards/Oneline";
import PlyCard2 from "../cards/PlyCard2";
import Rightcard from "../cards/Rightcard";
import Image from "next/image";
import CityC1 from "../cards/CityC1";
import Mline from "../cards/Mline";
import { useDispatch, useSelector } from "react-redux";
import { searchPostByCategory } from "../../redux/slice/postsSlice";

const rightData = [
  {
    title:
      "प्लेटलेट्स दान से बचाएं जान- अंतरराष्ट्रीय काशी घाट वॉक का देव दीपावली पर अनूठा जागरूकता अभियान",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718845/vijaynath_mishra_zutgde.jpg",
  },
  {
    title:
      "Aligarh Muslim University : 3 महीने में जे0एन0 मेडिकल कॉलेज नहीं सुधरा, तो खत्म ",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718852/jain_medical_college_lrcunc.png",
  },
  {
    title:
      "जिला अस्पताल में घंटों बिजली ना आने से तड़पते दिखे मरीज, शो पीस बना रहा जेनरेटर",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718857/distict_hospital_not_supply_light_myk3iy.png",
  },
  {
    title:
      "Soaked Walnuts Benefits: भीगे हुए अखरोट में भी छिपे हैं कई अनगिनत राज, गर्भवती",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669718861/soaked_walnuts_benefits_jxwzhw.jpg",
  },
];

function HealthN() {
  const { data: categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [healthActiveCategory, setHealthActiveCategory] = useState(
    categories[14].title
  );
  const [healthNewsArr, setHealthNewsArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result;

      if (healthActiveCategory !== null) {
        result = await dispatch(searchPostByCategory(healthActiveCategory));
      }
      // console.log("🔥🔥🔥🔥🔥", result);
      setHealthNewsArr(result);
    };
    fetchData();
  }, [healthActiveCategory]);
  return (
    <>
      <div className="container m-auto mt-20 ">
        <Mline
          categories={categories}
          setHealthActiveCategory={setHealthActiveCategory}
          parent={"Health"}
          data={{ name: "स्वास्थ्य " }}
        />
        <div className="grid grid-cols-12 gap-5 mt-8">
          <div className="col-span-12 md:col-span-8 lg:col-span-4">
            <CityC1 cardData={healthNewsArr} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <PlyCard2
              plyCardData={healthNewsArr && healthNewsArr.slice(1, 4)}
              data={rightData}
              start={0}
              end={4}
            />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <PlyCard2
              plyCardData={healthNewsArr && healthNewsArr.slice(4, 7)}
              data={rightData}
              start={0}
              end={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthN;
