import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Capabilities.css'

const capabilities = [
  {
    title: 'Web Development',
    description: 'Building fast, scalable web applications with modern frameworks',
    icon: '⚡',
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  {
    title: '3D & WebGL',
    description: 'Creating immersive 3D experiences that run smoothly in the browser',
    icon: '🎨',
    skills: ['Three.js', 'WebGL', 'Blender', 'Shaders'],
  },
  {
    title: 'Animation',
    description: 'Crafting smooth, performant animations that delight users',
    icon: '✨',
    skills: ['GSAP', 'Framer Motion', 'CSS', 'Lottie'],
  },
  {
    title: 'UI/UX Design',
    description: 'Designing beautiful interfaces with attention to every detail',
    icon: '🎯',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
  },
]

const Capabilities = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotation: index % 2 === 0 ? -5 : 5,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="capabilities">
      <div className="capabilities-container">
        <h2 className="section-title">What I Do Best</h2>
        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="capability-card"
            >
              <div className="cap-icon">{cap.icon}</div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-description">{cap.description}</p>
              <div className="cap-skills">
                {cap.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
