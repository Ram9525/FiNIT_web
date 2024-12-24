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
            src="https://plus.unsplash.com/premium_photo-1681488240099-f1f8585ef3e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
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

      {/* Second Section */}
      <div ref={(el) => (sectionRefs.current[1] = el)} className="about-section">
      <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1730829807443-c314c7bd4495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
          />
        </div>
        <div className="about-text">
          <p>
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
