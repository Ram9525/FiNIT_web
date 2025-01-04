import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./About.css";
import { useGSAP } from "@gsap/react";
import ab_img1 from "../../assets/manitTomb.jpg";
import ab_img2 from "../../assets/about2.jpg";

const About = () => {
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);
  useGSAP(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        
      },
    });

    sectionRefs.current.forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        x: 500,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div className="container-about shadow-xl">
      <div className="about-container overflow-x-hidden">
        <h1 style={{ fontFamily: "fh1" }} ref={headingRef} className="about-heading mt-3">
          About us
        </h1>
      
        {/* First Section */}
        <div ref={(el) => (sectionRefs.current[0] = el)} className="about-section mt-5">
          <div className="about-image">
            <img src={ab_img1} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center">
            <h2 style={{ fontFamily: "fh1" }} className="about-subheading">Our Vision</h2>
            <p style={{ fontFamily: "fh2" }}>
              Welcome to our world! We are a passionate team dedicated to
              delivering innovative solutions that inspire creativity and empower
              individuals. Our mission is to make an impact through our
              exceptional work, driven by values of innovation, collaboration,
              and excellence.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div ref={(el) => (sectionRefs.current[1] = el)} className="about-section">
          <div className="about-image">
            <img src={ab_img2} alt="About Us" />
          </div>
          <div className="about-text flex flex-col justify-center">
            <h2 style={{ fontFamily: "fh1" }} className="about-subheading">Our Mission</h2>
            <p style={{ fontFamily: "fh2" }}>
              We believe in the power of teamwork and thrive on challenges that
              push us beyond our limits. Our journey is defined by our pursuit of
              excellence, and we constantly strive to exceed expectations, one
              project at a time. Join us in this exciting adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
