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

      <div>
        <MoreWorks />
      </div>
    </div>
  );
}

export default page;
