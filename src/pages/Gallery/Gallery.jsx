import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from '../../assets/Gallery_1.jpg'
import img2 from '../../assets/Gallery_2.jpg'
import img3 from '../../assets/Gallery_3.jpg'

function CarouselGames() {
    return (
                <section className='bg-black p-4 px-20 h-screen flex flex-col justify-start gap-36'>
                    <div className='text-center text-white lg:text-6xl font-bold'>
                        <h1 className='mb-10'>Gallery</h1>
                        <h2>Glimpse: Wealth of Wizard 2K24</h2>
                    </div>
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 1 // Scrolling speed
                        },
                        arrows: false, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: '445px', // Fixed width for each slide
                        gap: '12px', // Gap between slides
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                    <SplideSlide>
                        <img src={img1} alt="Poster Brooklyn" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img2} alt="Poster Brooklyn"  />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={img3} alt="Poster Brooklyn"  />
                    </SplideSlide>
                    
                </Splide>
                </section>
            
    );
}

export default CarouselGames;