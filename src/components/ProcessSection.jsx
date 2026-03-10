import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProcessSection.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your vision, goals, and target audience',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating wireframes, prototypes, and visual concepts',
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building with clean code and best practices',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Testing, optimizing, and deploying to production',
  },
]

const ProcessSection = () => {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleX: 0,
        duration: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })

      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="process-section">
      <div className="process-container">
        <h2 className="section-title">My Process</h2>
        <div ref={lineRef} className="process-line"></div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="process-step"
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
