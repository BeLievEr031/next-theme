import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="container m-auto text-white px-">
        <div className="grid grid-cols-12 mt-10  py-10">
          <div className="col-span-12 md:col-span-4 ">
            <div className="p-2">
              <div className="relative h-10 w-40   hover:cursor-pointer bg-blue-800 ">
                <Image
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1669721289/9-news-logo-png-transparent_nseveb.png"
                  objectFit="contain"
                  layout="fill"
                  className="w-fit h-fit"
                  alt="abt img"
                />
              </div>
            </div>
            <div className="flex text-white ">
              <div className="text-xl font-bold p-2">GOOGLE PLAY</div>
              <div className="text-xl font-bold p-2">APP STORE</div>
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
            <div className="text-sm text-left p-2 text-gray-300">
              Copyright © 2022 9News Limited.
            </div>
          </div>

          <div className="col-span-6 flex-row md:flex-col md:col-span-1  text-[0.8rem] mb-8 md:mb-[10px] px-5 md:px-0 ">
            <div className="cool-link cursor-pointer">Jagran English</div><br />
            <div className="cool-link cursor-pointer">Gujarati News</div><br />
            <div className="cool-link cursor-pointer">Punjabi News</div><br />
            <div className="cool-link cursor-pointer">Health </div><br />
            <div className="cool-link cursor-pointer">Education</div><br />
            <div className="cool-link cursor-pointer">Nai Dunia</div><br />
            <div className="cool-link cursor-pointer">Inextlive</div><br />
            <div className="cool-link cursor-pointer">Her Zindagi</div><br />
            <div className="cool-link cursor-pointer">Radio City</div><br />
          </div>
          <div className="col-span-6 flex-row md:flex-col md:col-span-2 text-[0.8rem] md:mb-[10px]  md:ml-12 px-5 md:px-0">
            <div className="cool-link cursor-pointer"> Hindi News</div><br />
            <div className="cool-link cursor-pointer">Blogs</div><br />
            <div className="cool-link cursor-pointer">About us</div><br />
            <div className="cool-link cursor-pointer">Advertise with Us</div><br />
            <div className="cool-link cursor-pointer">Education</div><br />
           
            <div className="cool-link cursor-pointer">Partnership</div><br />
            <div className="cool-link cursor-pointer">Contact usi</div><br />
            <div className="cool-link cursor-pointer">Sitemap</div><br />
            <div className="cool-link cursor-pointer">Submit your news</div><br />
          </div>
          <div className="col-span-6 md:col-span-2 text-[0.8rem] mb-[10px] px-5 md:px-0">
            <div className="cool-link cursor-pointer">Mission Statement</div><br />
            <div className="cool-link cursor-pointer">Message from the Editor</div><br />
            <div className="cool-link cursor-pointer">Our Business</div><br />
            <div className="cool-link cursor-pointer">How our Journalists work</div><br />
            <div className="cool-link cursor-pointer">Corrections Policy</div><br />
            <div className="cool-link cursor-pointer">Coverage Priorities</div><br />
            <div className="cool-link cursor-pointer">Diverse Voices Statement</div><br />
            <div className="cool-link cursor-pointer">Diverse Staffing and Policy</div><br />
            <div className="cool-link cursor-pointer">Anonymous Sources Policy</div><br />
          </div>
          <div className="col-span-6 md:col-span-3 text-[0.8rem] mb-[5px] px-5 md:px-0">
            <div className="cool-link cursor-pointer">Actionable Feedback</div><br />
            <div className="cool-link cursor-pointer">Privacy Policy</div><br />
            <div className="cool-link cursor-pointer">Disclaimer</div><br />
            <div className="cool-link cursor-pointer">
              This website follows the DNPA’s code of conduct
            </div><br />
            <div className="cool-link cursor-pointer">
              For any feedback or complaint, email to compliant_gro
            </div><br />
            <div className="cool-link cursor-pointer">@jagrannewmedia.com</div><br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
