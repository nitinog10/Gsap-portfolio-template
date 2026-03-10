import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Stats.css'

const Stats = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat) => {
        const number = stat.querySelector('.stat-number')
        const target = parseInt(number.getAttribute('data-target'))

        gsap.from(number, {
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
          onUpdate: function () {
            number.textContent = Math.ceil(number.textContent) + '+'
          },
        })

        gsap.from(stat, {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="stats">
      <div className="stats-container">
        <div ref={(el) => (statsRef.current[0] = el)} className="stat-item">
          <div className="stat-number" data-target="150">0+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div ref={(el) => (statsRef.current[1] = el)} className="stat-item">
          <div className="stat-number" data-target="80">0+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div ref={(el) => (statsRef.current[2] = el)} className="stat-item">
          <div className="stat-number" data-target="25">0+</div>
          <div className="stat-label">Awards Won</div>
        </div>
        <div ref={(el) => (statsRef.current[3] = el)} className="stat-item">
          <div className="stat-number" data-target="7">0+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  )
}

export default Stats
