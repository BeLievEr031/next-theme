import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Video Iran Anti Hijab Protest : सुप्रीम लीडर खामेनेई की",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719138/a_screen_grab_from_a_video_posted_on_youtube_in_which_farideh_moradkhani_criticised_the_iranian_regime_pg8obi.jpg",
  },
  {
    title: "Shenzhou-15: चीन अपने स्पेस स्टेशन Tiangong पर भेजेगा",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719144/china_space_station_vj7i8w.jpg",
  },
  {
    title: "USA: 90 हजार घरों की बिजली हुई गुल, वजह बना एक विमान",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719150/plane_crash_mccukp.jpg",
  },
  {
    title: "China Protest: Jinping इस्तीफा दो, चीन में तेज हुई कोरो",
    imgurl:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1669719156/china_covid_protest_xv9fhl.jpg",
  },
];

function WorldC2({ worldCardData }) {
  return (
    <>
      <div className=" ">
        <div className="grid grid-cols-2  gap-5 ">
          {worldCardData && worldCardData.map((item, index) => (
            <div key={index} className="col-span-1 my-0 ">
              <div className="flex flex-wrap">
                <div className="relative h-[7rem] w-[12rem] hover:cursor-pointer mb-3 ">
                  <Link href={"/post/k"}>
                    <Image
                      src={item.thumbnail}
                      objectFit="strech"
                      layout="fill"
                      className="w-fit h-fit"
                      alt="img"
                      unoptimized={true}
                    />
                  </Link>
                </div>
                <div className="text-normal font-normal pb-2">
                  <div className=" cursor-pointer line-clamp-3">
                    <Link href={"/post/k"}>{item.title}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default WorldC2;
