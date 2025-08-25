// import Products from '@/app/Products'
import PageHeader from '@/components/PageHeader'
import React from 'react'

async function page({params}:any) {
  return (
    <div >
      <PageHeader page="Products" />    <div className='text-center'>

      {(await params)?.slug}</div>
    </div>
  )
}

export default page