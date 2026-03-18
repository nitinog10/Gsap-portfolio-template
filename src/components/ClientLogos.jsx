```jsx
import { useEffect, useRef } from'react';
import gsap from 'gsap';
import { useMarquee } from '../../utils/marquee';
import './ClientLogos.css';

const ClientLogos = () => {
  const { marqueeRef } = useMarquee();

  const clients = [
    'Google', 'Apple', 'Microsoft', 'Amazon', 'Meta',
    'Netflix', 'Tesla', 'Spotify', 'Adobe', 'Nike'
  ];

  return (
    <section className="client-logos">
      <div className="client-container">
        <h2 className="section-title">Trusted By</h2>
        <div ref={marqueeRef} className="marquee">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div key={index} className="client-item">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
```

```js
import { useEffect, useRef } from'react';
import gsap from 'gsap';

export const useMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const content = marquee.querySelector('.marquee-content');
    if (!content) return;

    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    gsap.to(marquee.children, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: 'linear',
    });
  }, []);

  return { marqueeRef };
};
```