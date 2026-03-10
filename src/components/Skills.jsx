import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

const skillsData = [
  { name: 'React', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'GSAP', level: 85 },
  { name: 'Three.js', level: 80 },
  { name: 'Node.js', level: 88 },
  { name: 'UI/UX Design', level: 92 },
]

const Skills = () => {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar) => {
        gsap.fromTo(
          bar,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <div
                  ref={(el) => (barsRef.current[index] = el)}
                  className="skill-bar"
                  style={{ '--skill-level': `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
