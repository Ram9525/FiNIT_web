import React from 'react';
import './Hero.css';
import Hero_img from '../../assets/FiNIT_hero.png';
import { SiBitcoinsv } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('#hero-title-1 h1 .name', {
      y: '-60%',
      opacity: 0,
      stagger: 0.2,
    });

    tl.from('.hero-content > p', {
      x: '-50%',
      opacity: 0,
    });

    tl.from('.hero-content > .h1', {
      x: '-50%',
      opacity: 0,
    });

    tl.from('.hero-image > img', {
      scale: 0,
      opacity: 0,
    });

    tl.eventCallback('onComplete', () => {
      animateHeroTitle('hero-title-1');
    });

    function animateHeroTitle(containerId) {
      const letters = document.querySelectorAll(`#${containerId} .name`);

      letters.forEach((letter) => {
        letter.style.opacity = '0';
      });

      gsap.to(`#${containerId} .name`, {
        opacity: 1,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          document.getElementById(containerId).style.display = 'none';
          const nextContainer = containerId === 'hero-title-1' ? 'hero-title-2' : 'hero-title-1';
          document.getElementById(nextContainer).style.display = 'block';
          animateHeroTitle(nextContainer);
        },
        repeat: 1,
        yoyo: true,
      });
    }
  });

  return (
    <>
      <div className="relative">
      <div className="absolute bg-black opacity-80 z-10 inset-0 min-h-screen"></div>
      <div className="hero relative bg-cover bg-fixed min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center px-6 md:px-10 lg:px-16 py-20 lg:py-8">
        {/* Hero Content */}
        <div className="hero-content relative z-10 text-center lg:text-left max-w-lg lg:max-w-xl">
          <div id="hero-title-1" className="sm:text-center lg:text-left mb-6">
            <h1 className="text-white font-bold text-[50px] md:text-[70px] lg:text-[90px] flex justify-center lg:justify-start">
              <span className="name inline-block">F</span>
              <span className="name inline-block">i</span>
              <span className="name inline-block">N</span>
              <span className="name inline-block">I</span>
              <span className="name inline-block">T</span>
            </h1>
          </div>

          <div id="hero-title-2" className="hidden sm:text-center lg:text-left mb-6">
            <h1 className="text-white font-bold text-[50px] md:text-[70px] lg:text-[90px] flex justify-center lg:justify-start">
              <span className="name inline-block">₣</span>
              <span className="name inline-block">1</span>
              <span className="name inline-block">₦</span>
              <span className="name inline-block">1</span>
              <span className="name inline-block">₮</span>
            </h1>
          </div>

          <p className="text-white text-[24px] md:text-[26px] lg:text-[48px] leading-tight font-bold mt-6 mb-4">
            <span className="finance" style={{color:"#58f5c2"}}>The Finance Society</span>
            <br />
            at <br />
            NIT{' '}
            <SiBitcoinsv className="inline text-yellow-500 text-5xl" />
            hopal
          </p>

          <span style={{fontFamily:'fh2'}} className="h1 text-white text-[18px] md:text-[22px] lg:text-[26px] font-bold inline-block">
            where innovation meets <span className="highlight" style={{color:"#874cff"}}>financial literacy</span>.
          </span>
        </div>

        {/* Hero Image */}
        <div className="hero-image relative z-10 mt-8 lg:mt-0 magnet ">
          <img
            className="w-[250px] md:w-[350px] lg:w-[500px] animate-[beat_5s_ease-in-out_0.2s_infinite_alternate]"
            src={Hero_img}
            alt="Hero"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;
