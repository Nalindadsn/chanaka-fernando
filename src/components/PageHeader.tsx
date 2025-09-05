"use client";
import { ArrowLeft, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PageHeader({page,icon}:{page:string,icon?:React.ReactNode}) {
  return (
    <section className=" bg-neutral-950 text-white  overflow-hidden">
            <div className="flex w-full justify-center mt-10 mb-10">
            <div className="">
                <div className=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  
    
                   
    <div className="relative">
    <div className="absolute -bottom-0 -left-15 z-100">
                    {" "}
                    <Link
                    href="/"
                    className="text-white inline-flex items-center gap-2 items-center justify-center px-0 sm:px-5 py-3 mr-3 text-base font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 text-shadow-lg"
                  >
                    <ArrowLeft />
                    Home
                  </Link><br/>
                    <span className="text-sm text-sm text-white text-shadow-lg bg-neutral-950 px-5 py-1 rounded-full ">Chanaka Fernando</span>
                    <div className="bg-yellow-600 px-2  whitespace-nowrap text-sm text-white rounded-full mt-1">
                      Excecutive Chef
                    </div>
                  </div>
                  <div className="flex items-center gap-2 absolute bottom-20 -right-25 z-100 text-2xl font-semibold text-white text-shadow-lg bg-neutral-950 px-5 py-1 rounded-full">
                   {icon} {page}
                    </div>
                  <Image
                    src="/chanaka-fernando.png"
                    alt="img"
                    width={200}
                    height={200}
                    className="scale-110 relative z-10 w-[200px] "
                  />
    </div>
                </div>
              </div>
              </div>
    
          </section>
  )
}

export default PageHeader