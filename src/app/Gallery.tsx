import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Gallery() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Gallery
          </h2>
          {/* <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            latest activities
          </p> */}
        </div>

        <section className=" py-8 antialiased  md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/1.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover object-top-left"
                      src="/gallery/2.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover object-top-left"
                      src="/gallery/3.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/4.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/5.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/6.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/7.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/8.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/9.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/10.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/11.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/12.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/13.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/14.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/15.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/16.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/17.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/18.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/19.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/20.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/21.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/22.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/23.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/24.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/25.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/26.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/27.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/28.jpeg"
                      alt="projects"
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
                    Image Caption
                  </Link>
                </div>
              </div>
              {/* <div className=" border border-neutral-800 bg-gradient-to-r from-black to-neutral-950 text-yellow-600  shadow-sm ">
                <div className="h-56 w-full">
                  <a href="#">
                    <Image
                      className="h-full w-full  object-cover"
                      src="/gallery/29.jpeg"
                      alt="projects"
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
                    Image Caption
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

export default Gallery;
