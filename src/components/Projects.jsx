import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'Quantum Interface',
    category: 'Web Design',
    description: 'A futuristic dashboard with real-time data visualization',
    color: '#667eea',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
  },
  {
    id: 2,
    title: 'Neural Network',
    category: 'AI/ML',
    description: 'Machine learning platform for predictive analytics',
    color: '#f093fb',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
  },
  {
    id: 3,
    title: 'Cosmic Explorer',
    category: 'Mobile App',
    description: 'Interactive space exploration experience',
    color: '#4facfe',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&q=80',
  },
  {
    id: 4,
    title: 'Digital Nexus',
    category: 'Blockchain',
    description: 'Decentralized marketplace for digital assets',
    color: '#43e97b',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
  },
  {
    id: 5,
    title: 'Velocity Engine',
    category: 'Performance',
    description: 'High-speed data processing framework',
    color: '#fa709a',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 6,
    title: 'Hyperspace Portal',
    category: '3D Experience',
    description: 'Immersive WebGL journey through dimensions',
    color: '#ff6b6b',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create horizontal scroll container
      const cards = cardsRef.current
      const totalWidth = cards.length * (window.innerWidth * 0.4 + 40)
      
      gsap.to(containerRef.current, {
        x: -totalWidth + window.innerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Individual card animations - spaceship launch from different angles
      cards.forEach((card, index) => {
        const angle = (index * 60) - 150 // Different angles for each card
        const distance = 1500
        const startX = Math.cos(angle * Math.PI / 180) * distance
        const startY = Math.sin(angle * Math.PI / 180) * distance
        
        gsap.fromTo(
          card,
          {
            x: startX,
            y: startY,
            rotation: angle,
            scale: 0.3,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 2,
            },
          }
        )

        // Rocket trail effect
        gsap.to(card.querySelector('.rocket-trail'), {
          scaleX: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 2,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="projects">
      <div className="projects-bg">
        <div className="warp-lines"></div>
      </div>
      <div ref={containerRef} className="projects-container">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="project-card"
            style={{ '--card-color': project.color }}
          >
            <div className="rocket-trail"></div>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="card-overlay"></div>
            </div>
            <div className="card-content">
              <span className="card-number">0{project.id}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-category">{project.category}</p>
              <p className="card-description">{project.description}</p>
              <div className="card-footer">
                <button className="card-button">
                  <span>Launch</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
