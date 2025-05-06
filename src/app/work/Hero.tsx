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
    <div className="bg-gray-800 text-white overflow-hidden relative">
      <div className="container mx-auto absolute  bottom-0  p-3 bg-orange-500 z-100"></div>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 min-h-[600px] place-items-center">
          <div className="grid col-span-2 relative h-full justify-center items-center">
            <div className="w-[280px] sm:w-[400px]">
              <motion.h1
                variants={container(0.5)}
                initial="hidden"
                whileInView={"show"}
                className="text-4xl md:text-6xl font-bold relative z-20 mt-10"
              >
                Nalinda <br /> Dissanayaka.
              </motion.h1>
              <motion.div
                variants={container(0.7)}
                initial="hidden"
                whileInView={"show"}
                className="h-[6px] w-[100px]  bg-orange-500 mt-5"
              ></motion.div>
              <motion.div className="mt-24 relative z-20">
                <ul className="flex gap-1 sm:gap-6">
                  <motion.li
                    variants={container(0.6)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    {" "}
                    <Button
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 inline-block rounded-full bg-orange-600 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaDribbble className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Button>
                  </motion.li>
                  <motion.li
                    variants={container(0.8)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    {" "}
                    <Button
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 inline-block rounded-full bg-blue-800 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaLinkedin className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Button>
                  </motion.li>
                  <motion.li
                    variants={container(1.0)}
                    initial="hidden"
                    whileInView={"show"}
                  >
                    <Button
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="z-100 mb-2 inline-block rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    >
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <FaFacebook className="text-2xl hover:scale-110 cursor-pointer transition-all duration-300" />
                      </span>
                    </Button>
                  </motion.li>
                </ul>
              </motion.div>
            </div>
            <div className="flex gap-6 mt-20"></div>
            <div className="absolute -right-8 md:-right-32 bottom-0 ">
              <Image
                src="/nalinda-dissanayaka.png"
                alt="img"
                width={400}
                height={400}
                className="scale-110 relative z-10 w-[280px] md:w-full"
              />
            </div>
          </div>
          <div className="space-y-7 md:px-0 px-10 pb-6">
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
              Fullstack Developer, based in Sri Lanka
            </motion.h1>
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              whileInView={"show"}
              className="text-sm leading-6 opacity-70"
            >
              Self-motivated , adaptable, conscientious and enthusiastic person
              with a flexible attitude to work Strong team-player skills
              developed through work in retail and group activities
            </motion.p>
            <motion.div
              variants={container(1)}
              initial="hidden"
              whileInView={"show"}
            >
              <Link
                href="/"
                target="_blank"
                className="group relative overflow-hidden bg-orange-600 focus:ring-4 focus:ring-orange-300 inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center"
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
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Suspense fallback={""}>
        <BackgroundBeams className="opacity-55" />
      </Suspense>
    </div>
  );
}

export default Hero;
