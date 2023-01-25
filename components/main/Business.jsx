import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPostByCategory } from "../../redux/slice/postsSlice";
import CityC1 from "../cards/CityC1";
import Mline from "../cards/Mline";
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

function Business() {
  const { data: categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [bussinessActiveCategory, setBussinessActiveCategory] = useState(
    categories[28].title
  );
  const [bussinessNewsArr, setBussinessNewsArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let result = await dispatch(
        searchPostByCategory(bussinessActiveCategory)
      );
      // console.log("🔥🔥🔥🔥🔥", result);
      setBussinessNewsArr(result);
    };
    fetchData();
  }, [bussinessActiveCategory]);

  return (
    <div className="container m-auto mt-20 ">
      <Mline
        categories={categories}
        setBussinessActiveCategory={setBussinessActiveCategory}
        parent={"Business"}
        data={{ name: "बिज़नेस " }}
      />
      <div className="grid grid-cols-12 gap-5 mt-8">
        <div className="lg:block hidden col-span-4 ">
          <CityC1 cardData={bussinessNewsArr} />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
          <PlyCard2
            // bussinessNewsArr={bussinessNewsArr}
            plyCardData={bussinessNewsArr && bussinessNewsArr.slice(4, 7)}
            parent={"Bussiness"}
            data={rightData}
            start={0}
            end={3}
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border-2">
          <PlyCard2
            // bussinessNewsArr={bussinessNewsArr}
            plyCardData={bussinessNewsArr && bussinessNewsArr.slice(7, 10)}
            parent={"Bussiness"}
            data={rightData}
            start={0}
            end={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Business;
