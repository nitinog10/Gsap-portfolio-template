import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'

const experienceData = [
  {
    year: '2023 - Present',
    role: 'Senior Creative Developer',
    company: 'Digital Innovations Inc.',
    description: 'Leading the development of award-winning interactive experiences using WebGL, Three.js, and GSAP. Mentoring junior developers and establishing best practices.',
    tech: ['React', 'Three.js', 'GSAP', 'WebGL'],
  },
  {
    year: '2021 - 2023',
    role: 'Full Stack Developer',
    company: 'Tech Startup Labs',
    description: 'Built scalable web applications and real-time data visualization dashboards. Implemented CI/CD pipelines and optimized performance.',
    tech: ['Node.js', 'React', 'MongoDB', 'AWS'],
  },
  {
    year: '2019 - 2021',
    role: 'Frontend Developer',
    company: 'Creative Agency Co.',
    description: 'Developed responsive websites and interactive campaigns for major brands. Collaborated with designers to bring creative visions to life.',
    tech: ['JavaScript', 'Vue.js', 'SASS', 'Figma'],
  },
  {
    year: '2018 - 2019',
    role: 'Junior Developer',
    company: 'Web Solutions Ltd.',
    description: 'Started my journey building websites and learning modern web technologies. Contributed to various client projects and internal tools.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
]

const Experience = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div ref={lineRef} className="timeline-line"></div>
          {experienceData.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <span className="timeline-year">{exp.year}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
