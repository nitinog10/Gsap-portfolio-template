import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      })

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      })

      statsRef.current.forEach((stat, index) => {
        gsap.from(stat, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="about">
      <div className="about-container">
        <div ref={textRef} className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a creative developer and digital artist passionate about crafting 
            immersive web experiences that push the boundaries of what's possible. 
            With a keen eye for design and a love for cutting-edge technology, 
            I transform ideas into stunning digital realities.
          </p>
          <p className="about-description">
            Specializing in WebGL, GSAP animations, and modern JavaScript frameworks, 
            I create websites that don't just look good—they feel alive. Every project 
            is an opportunity to innovate and deliver something extraordinary.
          </p>
          <div className="about-stats">
            <div ref={(el) => (statsRef.current[0] = el)} className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div ref={(el) => (statsRef.current[1] = el)} className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Clients</span>
            </div>
            <div ref={(el) => (statsRef.current[2] = el)} className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years</span>
            </div>
            <div ref={(el) => (statsRef.current[3] = el)} className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Awards</span>
            </div>
          </div>
        </div>
        <div ref={imageRef} className="about-image">
          <div className="image-wrapper">
            <div className="image-glow"></div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
