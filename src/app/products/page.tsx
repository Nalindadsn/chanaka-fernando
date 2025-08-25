import Products from '@/app/Products'
import PageHeader from '@/components/PageHeader'
import React from 'react'

function page() {
  return (
    <div>
      <PageHeader page="Products" />
      <Products/>
    </div>
  )
}

export default page