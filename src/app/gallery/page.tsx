import PageHeader from '@/components/PageHeader'
import { GalleryHorizontal } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div>
        <PageHeader page="Gallery"  icon={<GalleryHorizontal className='w-4 h-4 text-yellow-600'/>}/>
        page</div>
  )
}

export default page