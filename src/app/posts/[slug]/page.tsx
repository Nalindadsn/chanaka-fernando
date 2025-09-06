import FoodMenu from '@/app/Model'
import PageHeader from '@/components/PageHeader'
import { CardGlow } from '@/components/ui/card-glow'
import { ArrowRight, Book } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiJetFighter } from 'react-icons/gi'
import { MdFastfood } from 'react-icons/md'

async function page({params}:any) {
  const posts=[
    {
      slug:"sri-lankan-capture",
      title:"Sri Lankan Capture",
      image:"/sri-lankan-capture.avif",
      description:<div>
        
          <div className=" mb-5">
          <h2 className="flex items-center text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400">
        <Image 
        src="/posts/sri-lankan-capture/WAMC-Logo.png"
        width={80}
        height={80}
        alt='WAMC-Logo' className='w-20 h-20'/>
        
        
       <span> Sri Lankan Capture</span>
          </h2>
          <p className="mt-4 text-xl text-neutral-600 dark:text-neutral-400">
            World Association of Master Chef
          </p>
        </div>

        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/sri-lankan-capture-main.png"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/1.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/2.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/3.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/4.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/5.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/6.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/7.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/8.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
                    <br/>
        <Image
                      className=" md:w-full mx-auto"
                      src="/posts/sri-lankan-capture/9.jpeg"
                      alt="projects"
                      width={1280}
                      height={720}
                    />
      </div>
    },
    {
      slug:"3flavours-jet-catering",
      title:"3Flavours Jet Catering",
      image:"/sri-lankan-capture.avif",
      description:<div>
       
       <div className="overflow-hidden">
               <div className="md:flex    text white items-center ">
                 <div className="w-full text-center flex justify-center ">
                   <Image
                     src="/private-jet2.png"
                     alt="img"
                     width={410}
                     height={609}
                     className=" relative z-10 md:w-[400px] w-[300px]  max-w-[400px] shadow mr-5"
                   />
                 </div>
                 <div className=" p-2 md:p-8 rounded-tr-3xl  border-yellow-600 order-first">
                     
                     <div className="p-5">
                       <p className="mb-3  text-4xl sm:text-6xl text-yellow-600 font-bold flex">
                         <MdFastfood />
                         3Flavours Jet Catering
                       </p>
                       <h3 className="text-yellow-500">
                         {" "}
                         In-flight Private Jet Catering
                       </h3>
                       <p className="text-neutral-800 dark:text-yellow-100 ">
                         <br />
                         When your clients are flying at 30,000 feet, they’ll want a
                         personalised level of in-flight private jet catering that’s
                         always on time and meets any type of dietary requirement. We
                         offer a flexible and reactive 24/7 service. Whether it’s night
                         or day, a leisure or business trip, our prestigious,
                         experienced chefs have the ability to predict the culinary
                         needs of your clients. They know how to plan ahead for
                         satisfying meals and pre-touchdown appetisers.
                       </p>
                       
                     </div>
                     
                 </div>
               </div>
             </div>
        
       
      </div>
    }
  ]
  const paramsSlug=(await params)?.slug
  const post=posts.filter(post=>post.slug==paramsSlug)
  return (
    <div>
      <PageHeader page={post[0]?.title} icon={<Book className='w-4 h-4 text-yellow-600'/>}/>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start  md:px-8 '>
{post[0]?.description}
      </div>
    </div>
  )
}

export default page