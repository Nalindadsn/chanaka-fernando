import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MoreWorks() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl tracking-tight font-bold text-primary-800">
            My Works
          </h2>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              className="w-[400px] h-[400px] md:w-full mx-auto"
              src="/projects.png"
              alt="projects"
              width={400}
              height={400}
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">EzQuizy</h3>
                <p className="text-sm">
                  Our platform leverages user data and behavior to provide a
                  highly personalized experience, with dynamic content and
                  product recommendations that change in real-time.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  Mobile-Optimized Interface
                </h3>
                <p className="text-sm">
                  {" "}
                  Our website is designed with a mobile-first approach, offering
                  a seamless browsing experience across all devices, including
                  smartphones and tablets.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl">
                <h3 className="text-2xl font-bold text-md mb-6">
                  24/7 Customer Support
                </h3>
                <p className="text-sm">
                  ur U.S.-based customer support team is available around the
                  clock to answer any questions, resolve any issues, and provide
                  helpful solutions. Whether it's through email, phone, or live
                  chat, we're always here to support you.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl flex items-center justify-center">
                <Link
                  href="/work"
                  className="text-gray-900 inline-flex items-center gap-2 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:text-orange-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  More Works
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreWorks;
