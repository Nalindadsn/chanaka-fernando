"use client";

import React from "react";

const Nav = () => {
  return (
    <div className="relative w-full mb-10">

<header
    className=" inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
    <div className="px-4">
        <div className="flex items-center justify-between">
           
            <ul className=" md:flex md:items-center md:justify-center md:gap-5">
                <li aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >Jet Catering</li>
                <li className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >Menu</li>
                <li className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    >Gallery</li>
            </ul>
            
        </div>
    </div>
</header>
    </div>
  );
};

export default Nav;
