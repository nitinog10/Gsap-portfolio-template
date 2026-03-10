import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Marquee.css'

const Marquee = () => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    const content = marquee.querySelector('.marquee-content')
    const clone = content.cloneNode(true)
    marquee.appendChild(clone)

    gsap.to(marquee.children, {
      xPercent: -100,
      repeat: -1,
      duration: 20,
      ease: 'linear',
    })
  }, [])

  const skills = [
    'React', 'Three.js', 'GSAP', 'WebGL', 'Node.js', 'TypeScript',
    'Next.js', 'Tailwind', 'Framer Motion', 'Blender', 'Figma', 'WebAssembly'
  ]

  return (
    <section className="marquee-section">
      <div ref={marqueeRef} className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <span key={index} className="marquee-item">
              {skill}
              <span className="marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee
