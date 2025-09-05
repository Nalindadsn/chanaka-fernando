import PageHeader from '@/components/PageHeader'
import { GalleryHorizontal } from 'lucide-react'
import React from 'react'
import Gallery from '../Gallery'

function page() {
  return (
    <div>
        <PageHeader page="Gallery"  icon={<GalleryHorizontal className='w-4 h-4 text-yellow-600'/>}/>
        
        <Gallery/>
        </div>
  )
}

export default page