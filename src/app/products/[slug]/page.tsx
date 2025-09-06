// import Products from '@/app/Products'
import PageHeader from '@/components/PageHeader'
import React from 'react'

async function page({params}:any) {
  const slug=(await params)?.slug
  return (
    <div >
      <PageHeader page={slug} />    <div className='text-center'>

      {slug}
      
      </div>
    </div>
  )
}

export default page