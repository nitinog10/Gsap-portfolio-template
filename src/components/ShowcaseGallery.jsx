```
import { useEffect, useRef } from'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAnimation } from 'src/utils/animation'
import './ShowcaseGallery.css'

const gallery = [
  { id: 1, image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600', title: 'Project Alpha' },
  { id: 2, image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600', title: 'Project Beta' },
  { id: 3, image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600', title: 'Project Gamma' },
  { id: 4, image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=600', title: 'Project Delta' },
  { id: 5, image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600', title: 'Project Epsilon' },
  { id: 6, image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', title: 'Project Zeta' },
]

const ShowcaseGallery = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  useAnimation(sectionRef, itemsRef, {
    from: { scale: 0.8, opacity: 0 },
    duration: 1,
    scrollTrigger: {
      start: 'top 85%',
    },
  })

  return (
    <section ref={sectionRef} className="showcase-gallery">
      <div className="showcase-container">
        <h2 className="section-title">More Work</h2>
        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="gallery-item"
            >
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowcaseGallery
```