import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Services.css'

const servicesData = [
  {
    number: '01',
    title: 'Web Development',
    description: 'Building lightning-fast, responsive websites with modern frameworks and best practices.',
    icon: '⚡',
    color: '#667eea',
  },
  {
    number: '02',
    title: '3D Experiences',
    description: 'Creating immersive WebGL and Three.js experiences that captivate and engage users.',
    icon: '🎨',
    color: '#f093fb',
  },
  {
    number: '03',
    title: 'Animation & Motion',
    description: 'Crafting smooth, performant animations using GSAP and Framer Motion.',
    icon: '✨',
    color: '#4facfe',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'Designing beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎯',
    color: '#43e97b',
  },
]

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          rotation: index % 2 === 0 ? -10 : 10,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        })

        // Hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">What I Do</h2>
          <p className="section-description">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card"
              style={{ '--service-color': service.color }}
            >
              <div className="service-icon">{service.icon}</div>
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
