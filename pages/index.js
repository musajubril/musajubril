import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LearningPath from '../components/LearningPath'
import Portfolios from '../components/Portfolios'
import Services from '../components/Services'


export default function Home() {
  const [style, setStyle] = React.useState({
    bg: "bg-[#1e1e1e]",
    text: "text-white",
    sub: "text-[#F1F1F1]"
  })
  const LightMode =()=> {
    setStyle({
      bg: "bg-white",
      text: "text-[#232E35]",
      sub: "text-[#656D72]"
    })
  }
  const DarkMode =()=> {
    setStyle({
      bg: "bg-gray-900",
    text: "text-white"
    })
  }
  return (
    <div className={`px-10 ${style.bg} ${style.text} min-h-screen`}>
    <Header />
    <Hero />
    <Services />
    <Portfolios />
    <Experience />
    <LearningPath />
    <Contact />
    <Footer />
    </div>
  )
}
