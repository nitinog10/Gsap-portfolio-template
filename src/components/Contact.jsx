import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="contact">
      <div ref={contentRef} className="contact-content">
        <h2 className="contact-title">Let's Create Something Amazing</h2>
        <p className="contact-subtitle">
          Ready to launch your next project into orbit?
        </p>
        <div className="contact-links">
          <a href="mailto:hello@johndoe.com" className="contact-link">
            hello@johndoe.com
          </a>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Dribbble</a>
          </div>
        </div>
        <div className="contact-footer">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
