import React, { useRef, useEffect } from 'react';
import Card from '../../Components/Card/Card';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const eventCards = [
    { id: 1, title: 'Hackathon', poweredBy: 'TechSoc' },
    { id: 2, title: 'Finance Summit', poweredBy: 'FiNIT' },
    { id: 3, title: 'Art Exhibition', poweredBy: 'ArtClub' },
    { id: 4, title: 'Music Fest', poweredBy: 'MusicSoc' },
  ];
  
  const cardRefs = useRef([]);

  useGSAP(()=>{
    const tl = gsap.timeline(
      {
        scrollTrigger: {
            trigger: '.cont',
            start: 'top top',
            end: 'bottom',
            scrub: 3,
            pin: true,
            // markers: true,
            // pinSpacing:false
            
        }
    }
    );

    tl.from(cardRefs.current[0], { xPercent: -100, opacity: 0,  ease: 'power2.out' })
      .from(cardRefs.current[1], { xPercent: -100, opacity: 0,  ease: 'power2.out' })
      .from(cardRefs.current[2], { yPercent: 100, opacity: 0,  ease: 'power2.out' })
      .from(cardRefs.current[3], { yPercent: -100, opacity: 0, ease: 'power2.out' });
  })

  return (
    <div className="max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 cont overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-36 text-teal-500">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {eventCards.map((event, index) => (
          <div key={event.id} ref={(el) => (cardRefs.current[index] = el)}>
            <Card title={event.title} poweredBy={event.poweredBy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
