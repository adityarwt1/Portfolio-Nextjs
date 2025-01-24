import ContactMe from '@/components/contactMe'
import DataEntry from '@/components/DataEntry'
import VideoEdit from '@/components/VideoEdit'
import React from 'react'

export const metadata ={
  title: "Services",
  description: "contact me for use my services"
}

function page() {
  return (
    <>
    <ContactMe/>
    <VideoEdit/>  
    <DataEntry></DataEntry>
    </>
  )
}

export default page