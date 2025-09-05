import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import MoreWorks from "./MoreWorks";
import Gallery from "./Gallery";

function page() {
  return (
    <div>
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white relative pt-14 overflow-x-hidden">
        <div className="grid max-w-screen-xl px-4 pt-0 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              My Works
            </h1>
            <div className="bg-orange-500 p-1  w-[100px]"></div>
            <div className="flex gap-1 mt-2">
              <Link
                href="/"
                className="text-white inline-flex items-center gap-2 items-center justify-center px-0 sm:px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 "
              >
                <ArrowLeft />
                Home
              </Link>
              <Link
                href="/contact"
                className="text-white z-100 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="relative lg:mt-0 lg:col-span-5 lg:flex mt-10">
            <div className="right-0 absolute -bottom-10 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              <div className="absolute -bottom-0 -left-15 z-100">
                {" "}
                <span className="text-sm text-sm">Chanaka Fernando</span>
                <div className="bg-black px-2  whitespace-nowrap text-sm text-white rounded-full">
                  AMBASSADOR OF TASTE <br/>FOR THE GLOBAL GASTRONOMY
                </div>
              </div>

              <Image
                src="/chanaka-fernando-header.png"
                alt="img"
                width={410}
                height={609}
                className="scale-110 relative z-10 w-[200px] bg-gradient-to-r from-transparent  to-orange-500"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen">
        <MoreWorks />
      </div>
      {/* <div className="container mx-auto py-8">
        <Gallery />
      </div> */}
      <div className="container mx-auto">
        <Suspense fallback={<p>Loading...</p>}>
          <Image
            src="/my-w.png"
            alt="img"
            width={1000}
            height={1000}
            className="w-full max-w-[1000px] mx-auto"
          />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
