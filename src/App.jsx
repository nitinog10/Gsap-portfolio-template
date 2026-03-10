import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import SpaceshipProjects from './components/SpaceshipProjects'
import Capabilities from './components/Capabilities'
import ProcessSection from './components/ProcessSection'
import ShowcaseGallery from './components/ShowcaseGallery'
import ClientLogos from './components/ClientLogos'
import BigImpact from './components/BigImpact'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', ScrollTrigger.update)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <SpaceshipProjects />
      <Capabilities />
      <ProcessSection />
      <ShowcaseGallery />
      <ClientLogos />
      <BigImpact />
      <Footer />
    </div>
  )
}

export default App
