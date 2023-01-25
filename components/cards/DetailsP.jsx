import React from "react";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
function DetailsP({ post }) {
  return (
    <>
      <div className="mx-auto">
        <div className="px-2  my-10">
          {/* <ul className="flex gap-3 my-3 justify-start  cursor-pointer">
            <li className=" text-black font-bold  uppercase  text-sm  hover:underline duration-150 ">
             <Link href={"/"}> homepage</Link>
            </li>
            <span className="text-black font-bold">/</span>
            <li className=" text-black font-bold  uppercase  text-sm  hover:underline duration-150 ">
              television
            </li>
            <span className="text-blackfont-bold">/</span>
            <li className=" text-black font-bold  uppercase  text-sm  hover:underline duration-150 ">
              television news
            </li>
          </ul> */}
          <div className="font-bold text-4xl leading-normal tracking-wide py-1 font-sans">
            <h4>{post && post.title}</h4>
          </div>
          {/* <div className="py-4 font-normal text-lg">
            Kundali Bhagya&apos;s Shraddha Arya REACTS To Getting Robbed By Her
            Interior Designer: ‘Got My Fittings And Fixtures Back With An
            Apology’
          </div> */}
          <div className="sm:flex sm:justify-between justify-center text-center">
            <div className="text-gray-400 mt-4">
              Published:
              <span> {new Date(post && post.createdAt).toDateString()}</span>|
              <span>Submitted by:{post && post.author_name}</span>{" "}
            </div>
            <div className="p-2">
              <div className="justify-start flex gap-2   ">
                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-blue-900 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path
                      fillRule="evenodd"
                      d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                    ></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-pink-700 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-red-600 duration-300 cursor-pointer ">
                  <svg viewBox="0 0 512 512">
                    <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                  </svg>
                </div>

                <div className="w-9 fill-white p-2 rounded-full bg-gray-800 hover:bg-blue-500 duration-300 cursor-pointer">
                  <svg viewBox="0 0 512 512">
                    <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="relative  sm:h-[35rem] h-[20rem] my-5">
            <Image
              src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1667630296/news/arya_tnl_2022-5-26-10-4-14_thumbnail_k3oidr.jpg"
              objectFit="contain"
              layout="fill"
              className="w-fit h-fit"
              alt="abt img"
            />
          </div> */}

          <script async src="//www.instagram.com/embed.js"></script>
          <div className="grid lg:grid-cols-11 md:grid-cols-12 sm:grid-cols-12  gap-3  ">
            {/* <div className="lg:col-span-10 md:col-span-12 sm:col-span-12 ">
              <div className="leading-2 font-normal">
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
                <div>
                  <br></br>
                </div>
                <div>
                  Shraddha Arya, who plays Preeta in Zee TV&apos;s show
                  &apos;Kundali Bhagya&apos;, was recently robbed by her
                  interior designer while she was away. The actress shared her
                  ordeal on her Instagram account and revealed that the interior
                  designer named Siddharth Punjabi robbed her home material and
                  ran away with the fittings and other items. However, it seems
                  like the interior designer has realized his mistake as he has
                  returned her stolen things with an apology. Arya informed the
                  same in her latest post and thanked her fans and followers for
                  their support.
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 my-10">
                <div className="col-span-1 sm:block hidden my-auto cursor-pointer ">
                  <div className="fill-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 32.136719 3.0625 C 31.875 3.0625 31.628906 3.167969 31.441406 3.351563 L 10.359375 24.265625 C 9.964844 24.65625 9.960938 25.289063 10.351563 25.679688 L 31.265625 46.765625 C 31.65625 47.15625 32.289063 47.160156 32.679688 46.769531 L 38.703125 40.796875 C 39.097656 40.40625 39.101563 39.773438 38.710938 39.378906 L 24.476563 25.03125 L 38.828125 10.796875 C 39.21875 10.40625 39.222656 9.773438 38.832031 9.382813 L 32.859375 3.359375 C 32.667969 3.164063 32.40625 3.058594 32.136719 3.0625 Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-5 cursor-pointer">
                  <div>
                    <h1 className="font-bold text-pink-600 text-xs uppercase">
                      Dont&apos;miss
                    </h1>
                    <div className="font-bold text-base hover:opacity-50 duration-150">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates odio soluta dignissimos doloremque velit
                      repellendus sint optio enim excepturi ad.
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-5 cursor-pointer">
                  <div>
                    <h1 className="font-bold text-pink-600 text-xs uppercase">
                      Dont&apos;miss
                    </h1>
                    <div className=" font-bold text-base hover:opacity-50 duration-150 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates odio soluta dignissimos doloremque velit
                      repellendus sint optio enim excepturi ad.
                    </div>
                  </div>
                </div>
                <div className="col-span-1 sm:block hidden my-auto cursor-pointer ">
                  <div className="fill-gray-500 ">
                    <svg
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0,0,256,256"
                      // style="fill:#000000;"
                    >
                      <g
                        transform="translate(251.82245,256.6295) rotate(180)"
                        fill-rule="nonzero"
                        stroke-width="1"
                        stroke-linecap="butt"
                        stroke-linejoin="miter"
                        stroke-miterlimit="10"
                        stroke-dasharray=""
                        stroke-dashoffset="0"
                        font-family="none"
                        font-weight="none"
                        font-size="none"
                        text-anchor="none"
                        // style="mix-blend-mode: normal"
                      >
                        <g transform="scale(5.12,5.12)">
                          <path d="M32.13672,3.0625c-0.26172,0 -0.50781,0.10547 -0.69531,0.28906l-21.08203,20.91406c-0.39453,0.39063 -0.39844,1.02344 -0.00781,1.41406l20.91406,21.08594c0.39063,0.39063 1.02344,0.39453 1.41406,0.00391l6.02344,-5.97266c0.39453,-0.39062 0.39844,-1.02344 0.00781,-1.41797l-14.23437,-14.34766l14.35156,-14.23437c0.39063,-0.39062 0.39453,-1.02344 0.00391,-1.41406l-5.97266,-6.02344c-0.19141,-0.19531 -0.45312,-0.30078 -0.72266,-0.29687z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="border-b-2 border-gray-500-500"></h1>
            </div> */}
            <div className="lg:col-span-10 md:col-span-12 sm:col-span-12 ">
              {parse(post && post.content)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsP;
