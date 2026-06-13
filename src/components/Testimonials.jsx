import React, { useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "TechFlow Inc.",
    review: "Axiora completely transformed our platform architecture. The speed and scalability improvements were instantly noticeable.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Michael Chen",
    company: "Nexus Dynamics",
    review: "The level of engineering precision and attention to the UI/UX details made our SaaS product a market leader.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Elena Rodriguez",
    company: "Vanguard Retail",
    review: "Their e-commerce solution handled our Black Friday traffic flawlessly. Absolute game changers.",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    name: "David Kim",
    company: "FinServe Global",
    review: "Security and performance were our top priorities, and Axiora delivered beyond our expectations.",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

const Testimonials = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    let intervalId;
    const track = trackRef.current;
    
    const startScroll = () => {
      if (window.innerWidth <= 768 && track) {
        intervalId = setInterval(() => {
          const card = track.querySelector('.testimonial-card');
          if (!card) return;
          
          const scrollAmount = card.offsetWidth + 16; // width + gap
          
          if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 20) {
            track.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }, 3000);
      }
    };
    
    const stopScroll = () => {
      if (intervalId) clearInterval(intervalId);
    };

    const handleResize = () => {
      stopScroll();
      startScroll();
    };

    startScroll();
    window.addEventListener('resize', handleResize);

    if (track) {
      track.addEventListener('touchstart', stopScroll, { passive: true });
      track.addEventListener('touchend', startScroll, { passive: true });
    }

    return () => {
      stopScroll();
      window.removeEventListener('resize', handleResize);
      if (track) {
        track.removeEventListener('touchstart', stopScroll);
        track.removeEventListener('touchend', startScroll);
      }
    };
  }, []);

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-tag glow-text">Client Success</span>
          <h2 className="section-title">Trusted by <span>Leaders</span></h2>
        </div>
      </div>

      <div className="testimonials-slider-container">
        <div className="testimonials-track" ref={trackRef}>
          {testimonials.map((t, index) => (
            <div key={`t1-${index}`} className="testimonial-card glass glow">
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-company text-gold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for infinite scroll */}
          {testimonials.map((t, index) => (
            <div key={`t2-${index}`} className="testimonial-card glass glow">
              <p className="testimonial-review">"{t.review}"</p>
              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-company text-gold">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
