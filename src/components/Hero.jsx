import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    // Title animation
    const words = titleRef.current.querySelectorAll('.word')
    gsap.from(words, {
      y: 200,
      opacity: 0,
      rotationX: -90,
      stagger: 0.1,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.5,
    })

    // Canvas animation
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      })
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = '#00ff88'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <section ref={heroRef} className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 ref={titleRef} className="hero-title">
          <span className="word">CREATIVE</span>
          <span className="word">DEVELOPER</span>
          <span className="word">&</span>
          <span className="word">DIGITAL</span>
          <span className="word">ARTIST</span>
        </h1>
        <p className="hero-subtitle">
          Crafting immersive digital experiences with WebGL, GSAP & React
        </p>
        <div className="hero-cta">
          <button className="btn-primary">View Projects</button>
          <button className="btn-secondary">Get in Touch</button>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero
