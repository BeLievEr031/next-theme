import React, { useEffect, useState } from "react";

function Mline({
  playNewsArr,
  categories,
  data,
  parent,
  setPlayActiveCategory,
  setEntertainmentActiveCategory,
  setHealthActiveCategory,
  setAutoMoblieActiveCategory,
  setBussinessActiveCategory,
  setAstroActiveCategory,
}) {
  const [playActive, setPlayActive] = useState("");
  const [entertainmentActive, setEntertainmentActive] = useState("");
  const [healthtActive, setHealthActive] = useState("");
  const [autoMobileActive, setAutoMobileActive] = useState("");
  const [bussinessActive, setBussinessActive] = useState("");
  const [astroActive, setAstroActive] = useState("");

  const [active, setActive] = useState("");

  useEffect(() => {
    if (playActive !== "")
      setPlayActiveCategory && setPlayActiveCategory(playActive);
  }, [playActive]);

  useEffect(() => {
    if (autoMobileActive !== "")
      setAutoMoblieActiveCategory &&
        setAutoMoblieActiveCategory(autoMobileActive);
  }, [autoMobileActive]);

  useEffect(() => {
    if (entertainmentActive !== "")
      setEntertainmentActiveCategory &&
        setEntertainmentActiveCategory(entertainmentActive);
  }, [entertainmentActive]);

  useEffect(() => {
    if (healthtActive !== "")
      setHealthActiveCategory && setHealthActiveCategory(healthtActive);
  }, [healthtActive]);

  useEffect(() => {
    if (bussinessActive !== "")
      setBussinessActiveCategory && setBussinessActiveCategory(bussinessActive);
  }, [bussinessActive]);

  useEffect(() => {
    if (astroActive !== "")
      setAstroActiveCategory && setAstroActiveCategory(astroActive);
  }, [astroActive]);

  return (
    <>
      <div>
        <div className="text-black border-t-2 border-gray-500 "></div>
        <div className="flex -mt-4  justify-between">
          {/* <div className="text-black ml-10 bg-white font-bold text-xl  text-center pl-2 pr-2">
            {data.name}
          </div> */}

          {categories &&
            parent === "play" &&
            categories.map((item, index) => {
              if (index < 7) {
                // if (index === 0 && playActive === "") {
                //   // console.log("sandeep rajak");
                //   setPlayActive(item.title);
                // }
                return (
                  <div
                    key={index}
                    onClick={() => {
                      // console.log(playNewsArr);
                      setPlayActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      playActive === item.title ||
                      (index === 0 && playActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 0 ? "ml-10" : ""}`}
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {categories &&
            parent === "Entertainment" &&
            categories.map((item, index) => {
              if (index >= 7 && index < 14) {
                // if (index === 7 && entertainmentActive === "") {
                //   setEntertainmentActive(item.title);
                // }

                return (
                  <div
                    key={index}
                    onClick={() => {
                      setEntertainmentActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      entertainmentActive === item.title ||
                      (index === 7 && entertainmentActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 7 ? "ml-10" : ""}`}
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {categories &&
            parent === "Health" &&
            categories.map((item, index) => {
              // if (index === 14 && healthtActive === "") {
              //   setHealthActive(item.title);
              // }
              if (index >= 14 && index < 21) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setHealthActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      healthtActive === item.title ||
                      (index === 14 && healthtActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 14 ? "ml-10" : ""}`}
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {categories &&
            parent === "Automobile" &&
            categories.map((item, index) => {
              if (index >= 21 && index < 28) {
                // if (index === 21 && autoMobileActive === "") {
                //   setAutoMobileActive(item.title);
                // }
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setAutoMobileActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      autoMobileActive === item.title ||
                      (index === 21 && autoMobileActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 21 ? "ml-10" : ""}`}
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {categories &&
            parent === "Business" &&
            categories.map((item, index) => {
              if (index >= 28 && index < 35) {
                // if (index === 28 && bussinessActive === "") {
                //   setBussinessActive(item.title);
                // }
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setBussinessActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      bussinessActive === item.title ||
                      (index === 28 && bussinessActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 28 ? "ml-10" : ""}`}
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {categories &&
            parent === "Astrology" &&
            categories.map((item, index) => {
              // if (index === 35 && astroActive === "") {
              //   setAstroActive(item.title);
              // }
              if (index >= 35 && index < 42) {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setAstroActive(item.title);
                    }}
                    className={`flex capitalize items-center text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100  text-center pl-2 pr-2 w-32 ${
                      astroActive === item.title ||
                      (index === 35 && astroActive === "")
                        ? "font-bold"
                        : "font-normal"
                    } ${index === 35 ? "ml-10" : ""}`}F
                  >
                    {item.title}
                  </div>
                );
              } else {
                return null;
              }
            })}

          {/* <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300  bg-gray-100 w-24 text-center ">
            क्रिकेट
          </div>
          <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300   bg-gray-100 w-24 text-center ">
            और पढ़ें
          </div>
          <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300   bg-gray-100 w-24 text-center ">
            अन्य खेल
          </div>
          <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300   bg-gray-100 w-20 text-center ">
            टेनिस
          </div>
          <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300   bg-gray-100 w-24 text-center ">
            फ़ुटबॉल
          </div>
          <div className="text-black lg:block hidden cursor-pointer rounded-full border-2 border-gray-300   bg-gray-100 w-24 text-center ">
            और पढ़ें
          </div>
          <div className=" rounded-full border-2 align-middle cursor-pointer border-gray-300 mr-10  bg-gray-100 w-24 text-center flex justify-between gap-1">
            <div className="text-black ">और पढ़ें </div>
            <div className="w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                viewBox="0 0 48 48"
              >
                <path d="M34.484 11.984a1.5 1.5 0 00-1.045 2.577L40.88 22H3.5a1.5 1.5 0 100 3h37.379l-7.44 7.44a1.5 1.5 0 102.122 2.12l10-10a1.5 1.5 0 000-2.12l-10-10a1.5 1.5 0 00-1.077-.456z"></path>
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Mline;
