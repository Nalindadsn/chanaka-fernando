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
<p className="mb-3  text-6xl text-yellow-600 font-bold">Sri Lankan Capture.</p>
<p className="text-yellow-100 ">Dear all,<br/>

We are excited to announce that the World Association of Master Chefs Sri Lankan Chapter will be launching on May 29th, 2023. This is an incredible milestone for our organization and its members, who share a passion for culinary excellence and innovation.</p>
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
      <div className="overflow-hidden">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Testimonials
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            What our customers are saying
          </p>
        </div>
        <Emb />
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <TechStack />
        </Suspense>
      </div>

      <div>
        <MoreWorks />
      </div>
    </div>
  );
}

export default page;
