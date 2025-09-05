import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
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
              <div className="relative h-full py-4 px-6  rounded-br-xl">
                <h3 className="absolute top-2 left-4 text-sm font-bold text-md mb-6 bg-orange-500 px-2 py-1 text-white rounded-md">
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
                  {/* <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link href="https://ezquizy.com/" target="_blank">
                      See More
                    </Link>
                  </Button> */}
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
                <h3 className="absolute top-2 left-4 text-sm font-bold text-md mb-6 bg-orange-500 px-2 py-1 text-white rounded-md">
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
                  {/* <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link href="https://ezquizy.com/" target="_blank">
                      See More
                    </Link>
                  </Button> */}
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
              <div className="relative h-full py-4 px-6  rounded-br-xl">
                <h3 className="absolute top-2 left-4 text-sm font-bold text-md mb-6 bg-orange-500 px-2 py-1 text-white rounded-md">
                  Kataragama Clay House
                </h3>
                <div className="flex gap-1 absolute bottom-8 right-10">
                  <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link
                      href="https://kataragamaclayhouse.com"
                      target="_blank"
                    >
                      <Link2 />
                    </Link>
                  </Button>
                  {/* <Button
                    className="text-white bg-gray-800  border border-white border-2 shadow-lg"
                    size={"sm"}
                    asChild
                  >
                    <Link href="https://kataragamaclayhouse" target="_blank">
                      See More
                    </Link>
                  </Button> */}
                </div>
                <div className="border border border-gray-800 shadow-lg p-2 rounded-xl border-5">
                  <Image
                    className="w-[400px] h-[200px] md:w-full mx-auto"
                    src="/3-kataragamaclayhouse.png"
                    alt="projects"
                    width={400}
                    height={200}
                  />
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 mb-4 px-2 ">
              <div className="h-full py-4 px-6  rounded-br-xl flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreWorks;
