import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVision',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    text: 'Working with John was an absolute pleasure. His attention to detail and creative vision transformed our website into a work of art. The animations are smooth and the user experience is phenomenal.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCo',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    text: 'John delivered beyond our expectations. The interactive elements he created brought our product to life in ways we never imagined. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director, DesignHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    text: 'A true professional who understands both design and development. John bridges the gap perfectly and creates experiences that users love.',
    rating: 5,
  },
]

const Testimonials = () => {
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
    <section ref={sectionRef} className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="quote-icon">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
