import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MoreWorks() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Posts
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            latest activities
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              className="w-[400px] h-[400px] md:w-full mx-auto"
              src="/c.png"
              alt="projects"
              width={431}
              height={360}
            />
          </div>

          <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="relative h-full py-4 px-6  rounded-br-xl">
                <h3 className="absolute top-2 left-4 text-sm font-bold text-md mb-6 bg-green-600 px-2 py-1 text-white rounded-md">
                  EzQuizy
                </h3>
                <div className="flex gap-1 absolute bottom-8 right-10">
                  <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link href="https://ezquizy.com/" target="_blank">
                      <Link2 />
                    </Link>
                  </Button>
                </div>
                <div className="border border border-gray-800 shadow-lg p-2 rounded-xl border-5">
                  <Image
                    className="w-[400px] h-[200px] md:w-full mx-auto"
                    src="/1-ezquizy.png"
                    alt="projects"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="relative h-full py-4 px-6  rounded-br-xl">
                <h3 className="absolute top-2 left-4 text-sm font-bold text-md mb-6 bg-green-500 px-2 py-1 text-white rounded-md">
                  Gold Mortgaging Project
                </h3>
                <div className="flex gap-1 absolute bottom-8 right-10">
                  <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link href="https://gold2.vercel.app/" target="_blank">
                      <Link2 />
                    </Link>
                  </Button>
                </div>
                <div className="border border border-gray-800 shadow-lg p-2 rounded-xl border-5">
                  <Image
                    className="w-[400px] h-[200px] md:w-full mx-auto"
                    src="/2-gold.png"
                    alt="projects"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl">
                <h3 className="text-sm font-bold text-md mb-6">
                  24/7 Customer Support
                </h3>
                <p className="text-sm">
                  Our customer support team is available around the clock to
                  answer any questions, resolve any issues, and provide helpful
                  solutions. Whether it's through email, phone, or live chat,
                  we're always here to support you.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl flex items-center justify-center">
                <Link
                  href="/works"
                  className="text-gray-900 inline-flex items-center gap-2 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:text-green-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
