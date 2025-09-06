import React, { Suspense } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Qualities from "./Qualities";
import TechStack from "./TechStack";
import MoreWorks from "./MoreWorks";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Dot, Phone } from "lucide-react";
import EmblaCarousel from "@/components/testimonials/js/EmblaCarousel";
import Emb from "@/components/testimonials/js";
import Products from "./Products";
import JetCatering from "./JetCatering";
import { CardGlow } from "@/components/ui/card-glow";
import { GiJetFighter } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import FoodMenu from "./Model";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <div className="  ">
        <Suspense fallback={<div>Loading...</div>}>
          <Qualities />
        </Suspense>
      </div>
      <div>
        <div className="md:flex gap-5 bg-green-950  text white items-center my-12">
          <div className="w-full border-t-8 border-yellow-600">
            <Image
              src="/sri-lankan-capture.avif"
              alt="img"
              width={410}
              height={609}
              className=" relative z-10 w-[500px] w-full"
            />
          </div>

          <div className="p-5">
            <p className="mb-3  text-6xl text-yellow-600 font-bold">
              Sri Lankan Capture.
            </p>
            <p className="text-yellow-100 ">
              Dear all,
              <br />
              We are excited to announce that the World Association of Master
              Chefs Sri Lankan Chapter will be launching on May 29th, 2023. This
              is an incredible milestone for our organization and its members,
              who share a passion for culinary excellence and innovation.
            </p>
            <div className="w-full mb-4 px-2 ">
              <div className="h-full py-4   rounded-br-xl flex items-center ">
                <Link
                  href="/posts/sri-lankan-capture"
                  className="text-white flex"
                >
                  View Post
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <JetCatering/> */}
      <div className="overflow-hidden">
        <div className="md:flex    text white items-center my-12">
          <div className="w-full text-center flex justify-center ">
            <Image
              src="/private-jet2.png"
              alt="img"
              width={410}
              height={609}
              className=" relative z-10 md:w-[400px] w-[300px]  max-w-[400px] shadow mr-5"
            />
          </div>
          <div className=" p-2 md:p-8 rounded-tr-3xl  border-yellow-600 order-first">
            <CardGlow>
              <div className="absolute right-0 -top-7">
                <GiJetFighter className="w-16 h-16 text-yellow-500" />
              </div>
              <div className="p-5">
                <p className="mb-3  text-4xl sm:text-6xl text-yellow-600 font-bold flex">
                  <MdFastfood />
                  3Flavours Jet Catering
                </p>
                <h3 className="text-yellow-500">
                  {" "}
                  In-flight Private Jet Catering
                </h3>
                <p className="text-neutral-800 dark:text-yellow-100 ">
                  <br />
                  When your clients are flying at 30,000 feet, they’ll want a
                  personalised level of in-flight private jet catering that’s
                  always on time and meets any type of dietary requirement. We
                  offer a flexible and reactive 24/7 service. Whether it’s night
                  or day, a leisure or business trip, our prestigious,
                  experienced chefs have the ability to predict the culinary
                  needs of your clients. They know how to plan ahead for
                  satisfying meals and pre-touchdown appetisers.
                </p>
                <div className="w-full mb-4 px-2 ">
                  <div className="h-full py-4  flex w-full rounded-br-xl  items-center justify-between">
                    <Link
                      href="/posts/3flavours-jet-catering"
                      className="text-white flex"
                    >
                      View Post
                      <ArrowRight />
                    </Link>
                    <div className="relative">
                      <div className="absolute right-0 bottom-9">
                        <div className="loader"></div>
                      </div>
                      <FoodMenu />
                    </div>
                  </div>
                </div>{" "}
              </div>
            </CardGlow>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-green-950 py-16 px-4 relative">
        <div className="absolute top-8 left-3">
          <PiUsersThreeFill className="w-20 h-20 text-yellow-600 " />
        </div>
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-yellow-600">Testimonials</h2>
          <p className="mt-4 text-xl text-neutral-400 ">
            What our customers are saying
          </p>
        </div>
        <Emb />
      </div>

      <div>
        <MoreWorks />
      </div>
      <div>
        <Products />
      </div>
      <div className="mt-20 bg-green-950">
        <div className=" container mx-auto py-8 px-4 lg:py-16 lg:px-6 md:flex justify-center items-center gap-5">
          <div className="text-center mb-5">
            <Image
              src={`/appointment.png`}
              width={200}
              height={200}
              alt=""
              className="w-[200px] h-[200px] mx-auto"
            />
            <div>
              <Button asChild className="mt-5">
              <Link href="/contact" className=" font-semibold">
              <Phone className="inline-block mb-1"/> Contact me
              </Link></Button>
            </div>
          </div>
          <div className="text-white">
            <ul>
              <li className="flex items-center mb-2 gap-2" >
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                Personal chef for several private jet companies{" "}
              </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
                Ambassador for Ambassadors of Taste for the Global Gastronomy{" "}
              </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Member of The Chef’s Forum, inspiring future chefs </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Food consultant for the International Taste Institute </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>&nbsp;Project Consultant for 3flavours project, London</li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Executive Chef for Buddha Bar across 22 countries </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Head Chef for Chai Ki, Canary Wharf </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Head Chef for Del Aziz, Bermondsey </li>
              <li className="flex items-center mb-2 gap-2" >
                
                <svg
                  className="shrink-0 w-6 h-6 text-green-500 dark:text-green-400 bg-black rounded-full me-2 p-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>Senior Sous Chef for Boisdale of Belgravia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
