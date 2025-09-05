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
        <h1>Sri Lankan Capture</h1>
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
    }
  ]
  const paramsSlug=(await params)?.slug
  const post=posts.filter(post=>post.slug==paramsSlug)
  return (
    <div>
      <PageHeader page={post[0].title} icon={<Book className='w-4 h-4 text-yellow-600'/>}/>
      <div className='max-w-screen-xl mx-auto px-4 flex items-center justify-start  md:px-8 '>
{post[0].description}
      </div>
    </div>
  )
}

export default page