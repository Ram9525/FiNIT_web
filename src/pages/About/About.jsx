import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./About.css";

const About = () => {
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      sectionRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="container-about shadow-xl">
    <div className="about-container">
      <h1 ref={headingRef} className="about-heading">ABOUT US</h1>
      
      {/* First Section */}
      <div ref={(el) => (sectionRefs.current[0] = el)} className="about-section">
        <div className="about-image">
          <img
            src="https://via.placeholder.com/300"
            alt="About Us"
          />
        </div>
        <div className="about-text">
          <p>
            Welcome to our world! We are a passionate team dedicated to
            delivering innovative solutions that inspire creativity and empower
            individuals. Our mission is to make an impact through our
            exceptional work, driven by values of innovation, collaboration,
            and excellence.
          </p>
        </div>
      </div>

      {/* Second Section - Text on Left, Image on Right */}
      <div ref={(el) => (sectionRefs.current[1] = el)} className="about-section reverse">
        <div className="about-text">
          <p>
            We believe in the power of teamwork and thrive on challenges that
            push us beyond our limits. Our journey is defined by our pursuit of
            excellence, and we constantly strive to exceed expectations, one
            project at a time. Join us in this exciting adventure!
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://via.placeholder.com/300"
            alt="About Us"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
