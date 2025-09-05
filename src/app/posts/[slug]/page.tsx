import PageHeader from '@/components/PageHeader'
import { Book } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

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
        <h1>3Flavours Jet Catering</h1>
        <Image
                      className=" md:w-full mx-auto max-w-[400px]"
                      src="/private-jet2.png"
                      alt="projects"
                      width={600}
                      height={400}
                    />
                    <br/>
       
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