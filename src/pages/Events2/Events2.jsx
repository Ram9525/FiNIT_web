import React, { useRef, useEffect } from 'react';
import EventCard from '../../Components/EventCard/EventCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Events2.css';
gsap.registerPlugin(ScrollTrigger);
import { EventData } from '../../Features/EventSlice';

const Events2 = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            gsap.from(containerRef.current, {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: 'power3.out',
            });

           
            gsap.from(cardsRef.current, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2, 
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="mx-auto py-28 px-4 sm:px-6 lg:px-8 container-events">
            <h2 style={{fontFamily:'fh1'}} ref={containerRef} className="text-5xl font-bold text-center mb-32 text-[#C084FC]">
                Upcoming Events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 gap-y-20 py-5 place-items-center">
                {EventData.map((event, index) => (
                    <div
                        key={event.id}
                        ref={(el) => (cardsRef.current[index] = el)} 
                    >
                        <EventCard
                            id={event.id}
                            title={event.title}
                            poweredBy={event.poweredBy}
                            image={event.image}
                            description={event.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events2;
