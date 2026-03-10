```jsx
import { useEffect, useRef } from'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimation } from '../utils/animation';
import './BigImpact.css';

const BigImpact = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const { ctx, animateStats } = useAnimation(statsRef);

    animateStats();

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="big-impact">
      <div className="impact-container">
        <h2 className="section-title">Making an Impact</h2>
        <div className="impact-grid">
          <div ref={(el) => (statsRef.current[0] = el)} className="impact-stat">
            <div className="impact-number" data-target="200">0+</div>
            <div className="impact-label">Projects Delivered</div>
          </div>
          <div ref={(el) => (statsRef.current[1] = el)} className="impact-stat">
            <div className="impact-number" data-target="100">0+</div>
            <div className="impact-label">Happy Clients</div>
          </div>
          <div ref={(el) => (statsRef.current[2] = el)} className="impact-stat">
            <div className="impact-number" data-target="50">0+</div>
            <div className="impact-label">Awards Won</div>
          </div>
          <div ref={(el) => (statsRef.current[3] = el)} className="impact-stat">
            <div className="impact-number" data-target="10">0+</div>
            <div className="impact-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigImpact;
```

```jsx
// File: src/utils/animation.js

import gsap from 'gsap';

export const useAnimation = (statsRef) => {
  const ctx = gsap.context(() => {});

  const animateStats = () => {
    statsRef.current.forEach((stat) => {
      const number = stat.querySelector('.impact-number');
      const target = parseInt(number.getAttribute('data-target'));

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
          number.textContent = Math.ceil(number.textContent) + '+';
        },
      });
    });
  };

  return { ctx, animateStats };
};
```