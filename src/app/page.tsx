import React, { Suspense } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Qualities from "./Qualities";
import TechStack from "./TechStack";
import MoreWorks from "./MoreWorks";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EmblaCarousel from "@/components/testimonials/js/EmblaCarousel";
import Emb from "@/components/testimonials/js";
import Products from "./Products";
import JetCatering from "./JetCatering";
import { CardGlow } from "@/components/ui/card-glow";
import { GiJetFighter } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

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
          <div className="m-5 p-8 rounded-tr-3xl  border-yellow-600 order-first">
            <CardGlow>
              <div className="absolute right-0 -top-7"><GiJetFighter className="w-16 h-16 text-yellow-500" /></div>
              <div className="p-5">
<p className="mb-3  text-6xl text-yellow-600 font-bold flex">
              <MdFastfood />
3Flavours Jet Catering
            </p>
            <h3 className="text-yellow-500"> In-flight Private Jet Catering</h3>
            <p className="text-yellow-100 ">
              <br />
              When your clients are flying at 30,000 feet, they’ll want a
              personalised level of in-flight private jet catering that’s always
              on time and meets any type of dietary requirement. We offer a
              flexible and reactive 24/7 service. Whether it’s night or day, a
              leisure or business trip, our prestigious, experienced chefs have
              the ability to predict the culinary needs of your clients. They
              know how to plan ahead for satisfying meals and pre-touchdown
              appetisers.
            </p>
            <div className="w-full mb-4 px-2 ">
              <div className="h-full py-4   rounded-br-xl flex items-center ">
                <Link
                  href="/posts/3flavours-jet-catering"
                  className="text-white flex"
                >
                  View Post
                  <ArrowRight />
                </Link>
              </div>
            </div> </div>
            </CardGlow>
            
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-green-950 py-16 px-4 relative">
        <div className="absolute top-8 left-3">
          <PiUsersThreeFill className="w-20 h-20 text-yellow-600 "/>

        </div>
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold text-yellow-600">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
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
    </div>
  );
}

export default page;
