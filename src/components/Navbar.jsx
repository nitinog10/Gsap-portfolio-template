import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-logo">JOHN DOE</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="nav-cta">Let's Talk</button>
    </nav>
  )
}

export default Navbar
