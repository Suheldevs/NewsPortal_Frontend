import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BreakingNews from '../components/BreakingNews'
import BusinessNews from '../components/BusinessNews'
import VideosNews from '../components/VideoNews'
import WebStorySection from '../components/WebStorySection'
import TopFooter from '../components/TopFooter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <BreakingNews/>
    <BusinessNews/>
    <VideosNews/>
    <WebStorySection/>
    <TopFooter/>
    <Footer/>
    </>
  )
}
