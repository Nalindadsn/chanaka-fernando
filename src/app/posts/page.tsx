import PageHeader from '@/components/PageHeader'
import { Book } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div>
      <PageHeader page="Posts" icon={<Book className='w-4 h-4 text-yellow-600'/>}/>
    </div>
  )
}

export default page