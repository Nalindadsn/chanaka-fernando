import React, { Suspense } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Qualities from "./Qualities";
import TechStack from "./TechStack";
import MoreWorks from "./MoreWorks";

function page() {
  return (
    <div className="">
      <Nav />
      <Hero />
      <div className=" md:max-w-6xl mx-auto mt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Qualities />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          <TechStack />
        </Suspense>
      </div>
      <div className="py-10 mt-20 bg-gray-900 border-t border-black shadow-md ">
        <div className="md:max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Work with Us</h2>
          <p className="text-gray-300">
            We are always looking for talented individuals to join our team. If
            you have a passion for coding and a drive to make a positive impact,
            we invite you to apply.
          </p>
        </div>
      </div>
      <div>
        <MoreWorks />
      </div>
    </div>
  );
}

export default page;
