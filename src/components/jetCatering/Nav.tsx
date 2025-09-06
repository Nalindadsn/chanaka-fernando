"use client";

import Link from "next/link";
import React from "react";

const Nav = ({ page }: any) => {
  return (
    <div className="relative w-full mb-3 " id="menu">
      <header className=" inset-x-0 top-0 z-30 mx-auto w-full py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl ">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <ul className="">
              <li
                aria-current="page"
                className={`${
                  (page == "intro" || page==null) ? "bg-yellow-600" : "bg-white/80"
                }  inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-500 hover:text-gray-900 mr-1`}
              >
                <Link href="/posts/3flavours-jet-catering?page=intro#menu">
                  Intro
                </Link>
              </li>
              
              
              <li
                aria-current="page"
                className={`${
                  page == "menu" ? "bg-yellow-600" : "bg-white/80"
                }  inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-500 hover:text-gray-900 mr-1`}
              >
                <Link href="/posts/3flavours-jet-catering?page=menu#menu">
                  Menu
                </Link>
              </li>

              
              <li
                aria-current="page"
                className={`${
                  page == "gallery" ? "bg-yellow-600" : "bg-white/80"
                }  inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-yellow-500 hover:text-gray-900 mr-1`}
              >
                <Link href="/posts/3flavours-jet-catering?page=gallery#menu">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
