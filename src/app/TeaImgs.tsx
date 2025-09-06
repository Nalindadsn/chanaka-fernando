import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TeaImgs() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-3 px-4 lg:px-6">
        <div className="text-center mb-5">
          
          {/* <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            latest activities
          </p> */}
        </div>

        <section className=" antialiased  ">
          <div className="mx-auto max-w-screen-xl  2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/1.jpeg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover object-top-left"
                      src="/products/tea/2.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover object-top-left"
                      src="/products/tea/3.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/4.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/5.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/6.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/7.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/8.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/9.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/10.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/11.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/12.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/13.jpg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div>
              
             
              {/* <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/products/tea/29jpgg"
                      alt="3flavours tea"
                      width={400}
                      height={400}
                    />
                  </a>
                </div>
                <div className="p-3">
                  <Link
                    href="#"
                    className="text-lg font-semibold leading-tight hover:underline "
                  >
                    3Flavours Tea
                  </Link>
                </div>
              </div> */}
            </div>
            {/* <div className="w-full text-center">
              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Show more
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeaImgs;
