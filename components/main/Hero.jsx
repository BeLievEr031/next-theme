import { data } from "autoprefixer";
import React, { useEffect } from "react";
import Leftcard from "../cards/Leftcard";
import Middlecard from "../cards/Middlecard";
import Rightcard from "../cards/Rightcard";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreakingNews } from "../../redux/slice/postsSlice";
const leftData = [
  {
    title: "चांद पर 2030 तक बसेंगे इंसान, रोवर्स करेंगे काम में मदद",
  },
  {
    title:
      "भारत आने वाले विदेशी यात्रियों को बड़ी राहत, अब नहीं भरना होगा एयर सुविधा फॉर्म",
  },
  {
    title: "CBSE : 2023 होगा खास, खत्म हो सकती है दसवीं की परीक्षा",
  },
  {
    title: "आफताब की वैन पर हमले के 2 आरोपी 14 दिन की न्यायिक हिरासत में",
  },
  {
    title: "Video: जानिए कैसे और क्यों बढ़ रही सरकार व सुप्रीम कोर्ट की तनातनी",
  },
  {
    title:
      "गुजरात में आज शाम थम जाएगा पहले चरण का चुनाव प्रचार, बीजेपी और आप की ताबड़तोड़ रैलियां",
  },
  {
    title:
      "गोमती रिवर फ्रंट स्कैम: CBI की राडार पर फिर आए शिवपाल, निशाने पर IAS भी",
  },
  {
    title:
      "बच्चियों से रेप के मामले में टॉप पर यूपी, जानिए कितनों को मिल पाती है सजा",
  },
];
const middleData = [
  {
    title:
      "'द कश्मीर फाइल्स' को IFFI ज्यूरी ने बताया 'वल्गर प्रोपगंडा', अनुपम खेर ने कहा-' शर्मनाक'",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716409/dsfdsfn_tt1ngs.jpg",
  },
  {
    title:
      "सोनिया गांधी के कहने पर कांग्रेस अध्यक्ष खरगे ने पीएम मोदी को कहा रावण : संबित पात्रा",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716415/bjp_1_xlhr6y.jpg",
  },
  {
    title:
      "बीसीसीआई का बड़ा एक्शन!, टीम इंडिया के सीनियर खिलाड़ियों की टी20 से होगी",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716429/team-india-senior-players-will-focus-on-test-and-odi-cricket-in-2023-juniors-will-be-in-t20i_zfscd5.jpg",
  },
  {
    title:
      "नवजोत सिंह सिद्धू को मिलेगी बड़ी राहत! जल्द मिल सकती है जेल से रिहाई",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669716435/navjot_singh_sidhu01_pr7nlc.jpg",
  },
];

const rightData = [
  {
    title:
      "Mumbai News Live Updates: केंद्र सरकार महाराष्ट्र को देगी 6,800 करोड़ का ब्याज मुक्त लोन",
    time: "33m mins ago",
  },
  {
    title:
      "Mumbai News Live Updates पुणे में रिक्शा संघ के आंदोलन के खिलाफ बंडगार्डन थाने में मामला दर्ज",
    time: "53m mins ago",
  },
  {
    title:
      "Mumbai News Live Updates: मुंबई के दिंडोशी इलाके से 20 लाख रुपये की एमडी ड्रग्स जब्त, आरोपी गिरफ्तार",
    time: "1h ago",
  },
  {
    title:
      "Mumbai News Live Updates: महाराष्ट्र के चंद्रपुर में फुटओवर ब्रिज गिरा, 20 घायल हुए घायल; 8 की हालत गंभीर",
    time: "10 mins ago",
  },
  {
    title:
      "Mumbai News Live Updates: महाराष्ट्र के चंद्रपुर में फुटओवर ब्रिज गिरा, 20 घायल हुए घायल; 8 की हालत गंभीर",
    time: "10 mins ago",
  },
];

function Hero() {
  const dispatch = useDispatch();
  const { breakingNew } = useSelector((state) => state.posts);
  
  return (
    <>
      <div className="mt-20">
        <div className="container m-auto">
          <div className="grid grid-cols-10 gap-3 mt-10">
            <div className="md:col-span-3 sm:col-span-10 col-span-10 ">
              <div className="mb-3">
                <div className="border-t-2 border-gray-300  "></div>
                <div className="text-black bg-white w-24 text-center -m-3 mx-auto font-bold text-lg">
                  बड़ी खबरें
                </div>
              </div>
              {breakingNew.length > 0 &&
                breakingNew.map((item, index) => (
                  <Leftcard key={index} slug={item.slug} title={item.title} />
                ))}
            </div>
            <div className="md:col-span-4 sm:col-span-6 col-span-10 sm:border-l-2 sm:border-gray-300 ">
              {breakingNew.length > 0 && (
                <Middlecard breakingNews={breakingNew} data={middleData} />
              )}
            </div>
            <div className="md:col-span-3 sm:col-span-4 col-span-10  sm:border-l-2 sm:border-gray-300 px-3">
              <div className="mb-3">
                <div className="border-t-2 border-gray-300  "></div>
                <div className="text-black bg-white w-24 text-center -m-3 mx-auto font-bold text-lg">
                  लाईव डेस्क
                </div>
              </div>
              {breakingNew.length > 0 && (
                <Rightcard
                  breakingNews={breakingNew}
                  // data={rightData}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
