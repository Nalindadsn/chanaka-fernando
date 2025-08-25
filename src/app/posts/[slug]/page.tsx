import React from 'react'

async function page({params}:any) {
  const posts=[
    {
      slug:"sri-lankan-capture",
      title:"Sri Lankan Capture",
      image:"/sri-lankan-capture.avif",
      description:<div>test</div>
    }
  ]
  const paramsSlug=(await params)?.slug
  const post=posts.filter(post=>post.slug==paramsSlug)
  return (
    <div>{
      JSON.stringify(post)
    }</div>
  )
}

export default page