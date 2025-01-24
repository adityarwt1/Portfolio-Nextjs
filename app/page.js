
import React from 'react'
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
export const metadata = {
  title: "ADITYA | Portfolio",
  description: "Aditya full stack doveloper portfolio 2025",
};
function page() {

  return (
    <>
    <HeroSection/>
    <Skills/>
    <Projects/>
    <About/>
    </>

  )
}

export default page