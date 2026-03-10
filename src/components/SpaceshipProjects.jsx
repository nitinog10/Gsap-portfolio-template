import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './SpaceshipProjects.css'

const projects = [
  {
    id: 1,
    title: 'Quantum Dashboard',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
    color: '#00ff88',
  },
  {
    id: 2,
    title: 'Neural Interface',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    color: '#ff0080',
  },
  {
    id: 3,
    title: 'Cosmic Explorer',
    category: '3D Experience',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800',
    color: '#00d4ff',
  },
  {
    id: 4,
    title: 'Digital Nexus',
    category: 'Blockchain',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
    color: '#ffaa00',
  },
  {
    id: 5,
    title: 'Velocity Engine',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    color: '#aa00ff',
  },
  {
    id: 6,
    title: 'Hyperspace Portal',
    category: 'WebGL',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800',
    color: '#ff3366',
  },
]

const SpaceshipProjects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal scroll
      const cards = cardsRef.current
      const totalWidth = cards.length * (window.innerWidth * 0.5 + 60)

      gsap.to(containerRef.current, {
        x: -totalWidth + window.innerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth * 1.5}`,
          scrub: 1,
          pin: true,
        },
      })

      // Spaceship entry animation
      cards.forEach((card, index) => {
        const angle = (index * 60) - 150
        const distance = 2000
        const startX = Math.cos((angle * Math.PI) / 180) * distance
        const startY = Math.sin((angle * Math.PI) / 180) * distance

        gsap.fromTo(
          card,
          {
            x: startX,
            y: startY,
            rotation: angle,
            scale: 0.2,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 2,
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="spaceship-projects">
      <div className="projects-bg"></div>
      <div ref={containerRef} className="projects-container">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card"
            style={{ '--card-color': project.color }}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              <span className="card-number">0{project.id}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-category">{project.category}</p>
              <button className="card-btn">
                <span>Explore</span>
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </button>
            </div>
            <div className="rocket-trail"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpaceshipProjects
