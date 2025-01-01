import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from '../../assets/Gallery_1.jpg';
import img2 from '../../assets/Gallery_2.jpg';
import img3 from '../../assets/Gallery_3.jpg';

function CarouselGames() {
    return (
        <section className='bg-black p-4 px-4 lg:px-20 flex flex-col justify-start gap-36'>
            <div className='text-center text-white text-4xl lg:text-6xl font-bold'>
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
                    arrows: true, // Hide navigation arrows
                    pagination: false, // Hide pagination dots
                    fixedWidth: '445px', // Fixed width for each slide
                    gap: '12px', // Gap between slides
                    breakpoints: {
                        640: {
                            fixedWidth: '300px', // Smaller width for small screens
                            gap: '8px', // Smaller gap on small screens
                        },
                        768: {
                            fixedWidth: '350px', // Medium width for tablets
                        },
                        1024: {
                            fixedWidth: '445px', // Default width for larger screens
                        }
                    }
                }}
                extensions={{ AutoScroll }} // Use the AutoScroll extension
            >
                <SplideSlide>
                    <img src={img1} alt="Poster Brooklyn" className="w-full h-auto" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Poster Brooklyn" className="w-full h-auto" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Poster Brooklyn" className="w-full h-auto" />
                </SplideSlide>
            </Splide>
        </section>
    );
}

export default CarouselGames;
