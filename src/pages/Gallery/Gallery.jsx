import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from '../../assets/Gallery_1.jpg';
import img2 from '../../assets/Gallery_2.jpg';
import img3 from '../../assets/Gallery_3.jpg';

function CarouselGames() {
    return (
        <section className='bg-black py-4 px-4 lg:px-20 flex flex-col justify-start gap-12'>
            <div className='text-center text-white text-4xl lg:text-6xl font-bold'>
                <h1 className='mb-10 text-[#C084FC]'>Gallery</h1>
                <h2 className='text-[#C084FC]'>Glimpse: Wealth of Wizard 2K24</h2>
            </div>
            <Splide
                options={{
                    type: "loop",
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: true,
                        speed: 1,
                    },
                    arrows: true,
                    pagination: false,
                    fixedWidth: '600px', 
                    gap: '16px', 
                    breakpoints: {
                        640: {
                            fixedWidth: '350px', 
                            gap: '12px',
                        },
                        768: {
                            fixedWidth: '450px', 
                        },
                        1024: {
                            fixedWidth: '600px', 
                        },
                    },
                }}
                extensions={{ AutoScroll }}
            >
                <SplideSlide>
                    <img src={img1} alt="Gallery Image 1" className="w-full h-auto rounded-lg" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img2} alt="Gallery Image 2" className="w-full h-auto rounded-lg" />
                </SplideSlide>
                <SplideSlide>
                    <img src={img3} alt="Gallery Image 3" className="w-full h-auto rounded-lg" />
                </SplideSlide>
            </Splide>
        </section>
    );
}

export default CarouselGames;
