    import React from 'react'
    import './Hero.css'
    import Hero_img from '../../assets/FiNIT_hero.png'
    import { SiBitcoinsv } from "react-icons/si";
    import { useGSAP } from '@gsap/react';
    import gsap from 'gsap/gsap-core';

    function Hero() {
        useGSAP(()=>{      
            var tl = gsap.timeline();
            tl.from(".header .navbar", {
                scale:0.3,
                duration:0.5
                })
            
                tl.from("#hero-title-1 h1 .name",{
                y:"-60%",
                opacity:0,
                stagger:0.2
                })
            tl.from(".hero-content>p",{
                x:"-50%",
                opacity:0
            })
            tl.from(".hero-content>.h1",{
                x:"-50%",
                opacity:0
            })
            tl.from(".hero-image>img",{
                scale:0,
                opacity:0
            })
            tl.eventCallback("onComplete", () => {
                animateHeroTitle("hero-title-1"); // Start the hero title animation after the timeline
            });


            function animateHeroTitle(containerId) {
                // Get the letters in the current title
                const letters = document.querySelectorAll(`#${containerId} .name`);
              
                // Set initial opacity for the letters to ensure they start hidden
                letters.forEach(letter => {
                    letter.style.opacity = "0"; // Start with hidden letters
                });
                  gsap.to(`#${containerId} .name`, {
                      opacity: 1,          
                      duration: 0.5,         
                      stagger: 0.3,          
                      ease: "power2.out",    
                      onComplete: function() {
                          // Hide the current container
                          document.getElementById(containerId).style.display = "none";
                          // Determine the next container to show
                          const nextContainer = containerId === "hero-title-1" ? "hero-title-2" : "hero-title-1";
                          // Display the next container
                          document.getElementById(nextContainer).style.display = "block";
                          // Animate the next container
                          animateHeroTitle(nextContainer);
                      },
                      repeat: 1,           
                      yoyo: true          
                  });
              }
            });

            
            
    return (
        <>
        <div className='absolute bg-black opacity-80 z-10 inset-0'></div>
        <div className='hero relative bg-cover bg-center bg-fixed h-screen flex flex-col lg:flex-row justify-around lg:justify-between items-center px-6 md:px-10 lg:px-16 py-8'>
        <div class="hero-content relative z-10 text-center lg:text-left">
            <div id="hero-title-1" class="sm:text-center lg:text-left">
            <h1 class="text-white font-bold"> 
                <span class="name text-[50px] md:text-[70px] lg:text-[90px] inline-block">F</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px] inline-block">i</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px] inline-block">N</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px] inline-block">I</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px] inline-block">T</span>
            </h1>
            </div>
            <div id="hero-title-2" class="hidden sm:text-center lg:text-left">
            <h1 class="text-white font-bold">
                <span class="name text-[50px] md:text-[70px] lg:text-[90px]">₣</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px]">1</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px]">₦</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px]">1</span>
                <span class="name text-[50px] md:text-[70px] lg:text-[90px]">₮</span>
            </h1>
            </div>
            <p class="text-white text-[24px] md:text-[36px] lg:text-[48px] leading-[1.2] font-bold mt-6 md:mt-10 lg:mt-12 mb-4">
            <span class="finance text-teal-500">The Finance Society</span><br />at <br />NIT <SiBitcoinsv className='inline text-yellow-500 text-5.5xl'/>hopal
            </p>
            <span class="h1 text-white text-[18px] md:text-[22px] lg:text-[26px] font-bold inline-block">
            where innovation meets <span class="highlight text-[#9b51e0]">financial literacy</span>.
            </span>
        </div>

        <div class="hero-image relative z-10 lg:mt-0 magnet">
            <img class="w-[250px] md:w-[400px] lg:w-[500px] animate-[beat_5s_ease-in-out_0.2s_infinite_alternate]"
            src={Hero_img} alt="Hero Image"/>
        </div>
            
        </div>
        </>
    )
    }

    export default Hero