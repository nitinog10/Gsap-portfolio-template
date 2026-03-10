import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedWork.css'

const FeaturedWork = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="featured-work">
      <div className="featured-container">
        <div ref={imageRef} className="featured-image">
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200" alt="Featured" />
          <div className="image-glow"></div>
        </div>
        <div ref={textRef} className="featured-text">
          <span className="featured-label">Featured Project</span>
          <h2 className="featured-title">Immersive 3D Experience</h2>
          <p className="featured-description">
            A groundbreaking WebGL experience that pushes the boundaries of web technology.
            Built with Three.js, GSAP, and React for seamless performance.
          </p>
          <div className="featured-tags">
            <span>WebGL</span>
            <span>Three.js</span>
            <span>GSAP</span>
            <span>React</span>
          </div>
          <button className="featured-btn">View Case Study →</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
