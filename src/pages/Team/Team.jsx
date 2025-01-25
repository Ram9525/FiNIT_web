
import React, { useRef, useEffect } from 'react';
import './Team.css';
import { TeamDetails } from '../../Features/TeamSlice';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';  
import gsap from 'gsap';


const Team = () => {
  const headingRef = useRef(null);
  const secondYearRef = useRef([]);
  const thirdYearRef = useRef([]);
  const thirdYearHeadingRef = useRef(null);
  const secondYearHeadingRef = useRef(null);

  useEffect(() => {
    // Animation for the main heading
    gsap.fromTo(

      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',

      }
    );
    // Animation for the third-year heading
    gsap.fromTo(
    thirdYearHeadingRef.current,
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
    }
  );

    // Animation for third-year members
    thirdYearRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            stagger:1
          }
        );
      }
    });
  }, []);

  return (
    <div className="team-container">

      <h1
        style={{ fontFamily: "fh1", wordSpacing: "5px" }}
        className="team-heading"
      >
        Meet Our Team
      </h1>

      {/* Third Year Members */}
      <h1 className="team-heading">3rd Year</h1>
      <div className="team-grid">
        {TeamDetails.thirdYear.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (thirdYearRef.current[index] = el)}
          >
            {/* <div className="overlay"></div>  yaha dikkat ho raha tha */} 
            <div className="circle">
              <img
                src={member.profileImage}
                alt={member.name}
                className="team-photo"
              />
            </div>
            <h2 style={{ fontFamily: "fh1" }} className="team-name">
              {member.name}
            </h2>
            <p style={{ fontFamily: "fh2" }} className="team-position">
              {member.role}
            </p>
            <div className="flex justify-center space-x-4 pt-4">
            <a href={member.linkedIn} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaLinkedinIn size={24} />
                </a>
            <a href={member.instagram} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaInstagram size={24} />
                </a>
            <a href={`mailto:${member.email}`} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaEnvelope  size={24} />
                </a>
                </div>
          </div>
        ))}
      </div>

      {/* Breaker Component */}
      <div className="breaker relative flex items-center w-full my-36">
        {/* Left Lightning Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-400 absolute left-0"
          style={{ transform: "translateY(-50%)" }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2l-5.09 11H12l-1 9 7.09-12H13z" />
        </svg>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Right Lightning Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-gray-400 absolute right-0"
          style={{ transform: "translateY(-50%)" }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2l-5.09 11H12l-1 9 7.09-12H13z" />
        </svg>
      </div>

      {/* Second Year Members */}
      <h1 className="team-heading">2nd Year</h1>
      <div className="team-grid">
        {TeamDetails.secondYear.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (secondYearRef.current[index] = el)}
          >
            <div className="overlay"></div>
            <div className="circle">
              <img
                src={member.profileImage}
                alt={member.name}
                className="team-photo"
              />
            </div>
            <h2 style={{ fontFamily: "fh1" }} className="team-name">
              {member.name}
            </h2>
            <p style={{ fontFamily: "fh2" }} className="team-position">
              {member.role}
            </p>
            <div className="flex justify-center space-x-4 pt-4">
            <a href={member.linkedIn} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaLinkedinIn size={24} />
                </a>
            <a href={member.instagram} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaInstagram size={24} />
                </a>
                <a href={`mailto:${member.email}`} target='_blank' className="hover:text-purple-300 transition-transform transform hover:scale-110">
                  <FaEnvelope  size={24} />
                </a>
                </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
