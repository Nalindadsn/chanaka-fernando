import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Products() {
  return (
    <div className=" text-gray-900 dark:text-gray-100">
      <div className="container mx-auto py-8 px-4 lg:py-16 lg:px-6">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
            Our Products
          </h2>
          {/* <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            latest activities
          </p> */}
        </div>

       <section className=" py-8 antialiased  md:py-12">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    
    
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div className=" bg-gradient-to-r from-green-800 to-green-950 text-yellow-600  shadow-sm ">
        <div className="h-56 w-full">
          <Link href="/products/3flavours-tea">
            <Image
              className="h-full w-full  object-cover"
              src="/products/products-1.jpeg"
              alt="projects"
              width={400}
              height={400}
            />
          </Link>
        </div>
        <div className="p-3">
          

          <Link href="/products/3flavours-tea" className="text-lg font-semibold leading-tight hover:underline ">
          3Flavor Tea
          </Link>

          

        
        
        </div>
      </div>
      
    </div>
    <div className="w-full text-center">
      <Link href={`/products`} className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
        Show more
      </Link >
    </div>
  </div>
  
</section>
      </div>
    </div>
  );
}

export default Products;
