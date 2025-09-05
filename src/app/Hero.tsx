"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { CardGlow } from "@/components/ui/card-glow";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { delay, motion } from "framer-motion";
import {
  FaArrowRight,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const container = (delay: any) => ({
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});
function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-950 to-black  text-white overflow-hidden relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[600px] place-items-center">
          <div className="grid col-span-2 relative h-full justify-center items-center">
            <div className="w-[280px] sm:w-[400px]">
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                whileInView={"show"}
                className="text-4xl md:text-6xl font-bold relative z-20 mt-10 text-shadow-md"
              >
                Chanaka <br /> Fernando.
              </motion.h1>
              <motion.div
                variants={container(0.7)}
                initial="hidden"
                whileInView={"show"}
                className="h-[6px] w-[100px]  bg-green-500 mt-5"
              ></motion.div>
              <motion.div className="mt-24 relative z-20">
                <ul className="flex gap-1 sm:gap-6">
                  {/* <motion.li
                    variants={container(0.6)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    {" "}
                    <Link
                      href="https://stackprod.com"
                      target="_blank"
                      className="mb-2 inline-block rounded-full bg-green-600 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaDribbble className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.li> */}
                  <motion.li
                    variants={container(0.8)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    {" "}
                    <Link
                      href="https://www.linkedin.com/in/chanakafernando"
                      target="_blank"
                      className="mb-2 inline-block rounded-full bg-blue-800 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaLinkedin className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={container(1.0)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <Link
                      href="https://web.facebook.com/chanaka.fernando.5011"
                      target="_blank"
                      className="z-100 mb-2 inline-block rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaFacebook className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            <div className="flex gap-6 mt-20"></div>
            <div className="absolute -right-8 md:-right-32 bottom-0 ">
              <Image
                src="/chanaka-fernando1.png"
                alt="img"
                width={410}
                height={609}
                className="scale-110 relative z-10 w-[200px] md:w-[280px] "
              />
            </div>
          </div>
          <div className="space-y-7 md:px-0 px-10 pb-6 text-shadow-md z-50">
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              whileInView={"show"}
              className="text-sm opacity-50 tracking-widest font-serif translate-y-3 font-serif"
            >
              - Introcuction
            </motion.p>
            <motion.h1
              variants={container(0.6)}
              initial="hidden"
              whileInView={"show"}
              className="text-2xl lg-text-3xl"
            >
              AMBASSADOR OF TASTE FOR THE GLOBAL GASTRONOMY®, based in UK
            </motion.h1>
            <motion.p
              // variants={container(0.8)}
              // initial="hidden"
              // whileInView={"show"}
              className="text-sm leading-6 opacity-70"
            >
              Self-motivated , adaptable, conscientious and enthusiastic person
              with a flexible attitude to work Strong team-player skills
              developed through work in retail and group activities
            </motion.p>
            <motion.div
            // variants={container(1)}
            // initial="hidden"
            // whileInView={"show"}
            >
              <Link
                href="/about"
                className="border-2 group relative overflow-hidden bg-green-600 focus:ring-4 focus:ring-green-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
              >
                <span className="z-40">My Story</span>
                <svg
                  className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    className="hover:fill-red-600"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
              </Link>
            </motion.div>
            <div className=" absolute bottom-10 right-10">
              <Image
                src="/gold-medal.png"
                alt="img"
                width={192}
                height={324}
                className=" relative z-10 w-[80px] "
              />
            </div>

            {/* <svg
              className="w-[250px] h-[205px] absolute -bottom-8 right-0 opacity-60 "
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt"
              height="225.000000pt"
              viewBox="0 0 300.000000 225.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              {" "}
              <g
                transform="translate(0.000000,225.000000) scale(0.050000,-0.050000)"
                fill="#5d6d7e"
                stroke="none"
              >
                {" "}
                <path d="M2470 3119 l-14 -61 -162 4 c-108 3 -165 -4 -170 -19 -5 -16 42 -23 156 -23 123 0 162 -6 155 -25 -5 -14 -25 -72 -44 -130 -43 -132 -48 -134 -140 -72 -229 156 -625 4 -582 -224 46 -246 350 -257 577 -20 109 114 106 114 134 -21 58 -279 -135 -721 -382 -873 -333 -205 -1057 -53 -1130 237 -19 73 4 263 37 315 55 85 63 126 17 85 -53 -48 -102 -198 -102 -311 0 -465 988 -639 1350 -238 198 218 313 690 220 896 -29 65 -31 86 -11 110 14 16 41 82 61 145 l36 116 332 0 c258 0 332 -6 332 -26 0 -14 -14 -83 -32 -153 l-32 -127 -89 -13 c-243 -37 -418 -201 -288 -270 104 -56 238 6 337 155 l73 109 205 -9 c113 -5 206 -2 206 6 0 26 -126 42 -268 35 l-132 -7 13 70 c7 39 20 91 30 116 47 126 1 190 -116 163 -38 -8 -176 -10 -307 -4 l-238 11 12 57 c15 78 -27 74 -44 -4z m-243 -354 c91 -54 89 -96 -9 -189 -214 -204 -466 -210 -506 -13 -39 195 300 327 515 202z m813 -126 c0 -56 -180 -199 -250 -199 -148 0 -100 110 78 179 115 44 172 51 172 20z" />{" "}
                <path d="M3901 3002 c-86 -121 -152 -667 -98 -821 22 -64 20 -71 -40 -124 -142 -127 -222 -37 -93 106 99 110 100 236 2 349 l-68 78 -157 -1 c-223 -2 -412 -93 -490 -237 -46 -86 -54 -93 -66 -55 -17 55 -46 54 -105 0 -38 -36 -46 -38 -46 -12 0 52 -31 57 -85 15 -50 -39 -51 -39 -61 1 -14 52 -63 26 -129 -67 -61 -87 -33 -99 37 -15 66 79 92 71 60 -21 -27 -77 -28 -118 -4 -118 10 0 23 30 30 67 13 67 101 171 124 147 7 -7 3 -53 -9 -102 -39 -152 -9 -198 34 -54 63 210 134 204 131 -11 -2 -157 -7 -151 86 -113 44 18 138 -159 97 -183 -198 -118 -424 -315 -443 -387 -37 -134 23 -141 739 -83 314 26 665 9 1071 -50 283 -41 502 -58 502 -38 0 63 -1259 161 -1630 128 -792 -73 -829 -43 -362 291 l178 128 72 -45 c206 -128 990 -20 1200 165 52 46 74 55 95 38 74 -62 185 54 223 235 l15 73 160 -7 c313 -14 569 -9 562 11 -4 12 -144 22 -353 25 -191 3 -350 9 -355 13 -4 4 11 110 34 234 44 241 52 378 23 378 -9 0 -24 -70 -31 -155 -8 -85 -22 -191 -32 -235 -9 -44 -22 -114 -29 -155 -9 -59 -21 -75 -53 -75 -36 0 -40 8 -28 70 30 162 -108 247 -235 145 -40 -32 -60 -69 -68 -130 -11 -84 -12 -85 -94 -85 -99 -1 -137 -22 -130 -72 8 -56 -51 -178 -104 -215 -73 -52 -162 55 -98 119 34 34 101 252 142 463 36 188 37 250 6 400 -13 64 -77 57 -127 -13z m104 -155 c1 -230 -126 -727 -169 -663 -47 69 25 706 88 787 58 73 81 38 81 -124z m-426 -313 c127 -64 167 -225 86 -349 -45 -69 -62 -54 -69 60 -7 116 -57 151 -124 84 -27 -27 -39 -28 -63 -8 -37 30 -93 -14 -130 -102 -28 -70 -41 -72 -89 -19 -32 36 -33 46 -9 95 15 30 31 62 35 70 4 8 -10 15 -32 15 -49 0 -92 -50 -93 -108 -1 -66 -109 -187 -133 -151 -138 205 368 542 621 413z m977 -44 c50 -110 12 -170 -108 -170 -103 0 -108 3 -108 51 0 139 166 230 216 119z m-996 -278 c0 -124 11 -113 -244 -249 l-195 -104 -48 76 -48 75 83 14 c78 14 192 111 192 164 0 24 61 92 83 92 27 0 20 -88 -13 -166 -17 -41 -22 -77 -11 -83 10 -6 33 36 52 94 71 222 149 268 149 87z m1068 76 c92 -35 -33 -308 -127 -278 -37 11 -37 15 10 109 27 53 49 110 49 126 0 48 20 61 68 43z m-328 -55 c0 -26 23 -81 51 -123 64 -94 56 -114 -74 -188 -284 -162 -1117 -223 -1117 -81 0 10 11 20 25 20 14 1 101 45 195 97 165 94 170 95 190 54 29 -58 104 -64 172 -14 70 52 75 52 132 -1 76 -72 202 25 238 183 22 96 26 100 107 100 72 0 81 -5 81 -47z m207 -42 c-54 -161 -124 -150 -159 25 l-13 64 101 0 102 0 -31 -89z m-1319 -86 c-24 -38 -168 -61 -168 -28 0 11 24 48 53 83 l53 63 42 -42 c33 -33 37 -49 20 -76z" />{" "}
              </g>{" "}
            </svg> */}
          </div>
        </div>
      </div>
      <Suspense fallback={""}>
        {/* <BackgroundBeams className="opacity-55 md:min-w-auto md:min-h-auto min-w-[1000px] min-h-[1000px]" /> */}
      </Suspense>
    </div>
  );
}

export default Hero;
