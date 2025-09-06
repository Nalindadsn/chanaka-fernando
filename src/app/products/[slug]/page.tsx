// import Products from '@/app/Products'
import TeaImgs from '@/app/TeaImgs'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import React from 'react'

async function page({params}:any) {
  const slug=(await params)?.slug
  return (
    <div >
      <PageHeader page={slug} />    <div className='text-center'>

      <TeaImgs/>


      
      </div>
    </div>
  )
}

export default page