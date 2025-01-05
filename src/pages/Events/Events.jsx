import React, { useRef, useEffect } from 'react';
import EventCard from '../../Components/EventCard/EventCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events.css';
gsap.registerPlugin(ScrollTrigger);
import { EventData } from '../../Features/EventSlice';

const Events = ({ isHomePage }) => {
  const cardRefs = useRef([]);

  useGSAP(() => {
    if (window.innerWidth < 640) return;

    if (isHomePage) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.container-events',
          start: window.innerWidth >= 1280 ? 'top top' : '+=300 top',
          end: 'bottom',
          scrub: 3,
          pin: true,
        },
      });

      tl.from(cardRefs.current[0], { xPercent: -100, opacity: 0, ease: 'power2.out' })
        .from(cardRefs.current[1], { xPercent: -100, opacity: 0, ease: 'power2.out' })
        .from(cardRefs.current[2], { yPercent: 100, opacity: 0, ease: 'power2.out' })
        .from(cardRefs.current[3], { yPercent: -100, opacity: 0, ease: 'power2.out' });
    } 
    
    else {
      gsap.from(cardRefs.current, {
        rotationY: 180, // Flip effect
        scale: 0.5,     // Shrink initially
        opacity: 0,     // Start invisible
        stagger: 0.2,   // Delay between animations
        duration: 1.2,  // Animation time
        ease: 'back.out(1.7)', // Smooth and bouncy exit
      });
      
    }
  });

  return (
    <div className="mx-auto py-28 px-4 sm:px-6 lg:px-8 container-events">
      <h2 style={{ fontFamily: 'fh1' }} className="text-5xl font-bold text-center mb-36 text-teal-500">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-20 place-items-center">
        {EventData.map((event, index) => (
          <div key={event.id} ref={(el) => (cardRefs.current[index] = el)}>
            <EventCard id={event.id} title={event.title} poweredBy={event.poweredBy} image={event.image} description={event.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
