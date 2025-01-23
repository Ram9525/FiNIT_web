import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Team.css';
import { TeamDetails } from '../../Features/TeamSlice';

const Team = () => {
  const secondYearRef = useRef([]);
  const thirdYearRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      [...secondYearRef.current, ...thirdYearRef.current], // Use both refs
      { y: 100, opacity: 0 }, 
      {
        y: 0, 
        opacity: 1, 
        duration: 1,
        stagger: 0.2, 
        ease: 'power2.out', 
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".team-heading",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className="team-container">
      <h1 style={{ fontFamily: 'fh1', wordSpacing: '5px' }} className="team-heading">Meet Our Team</h1>
      <div className="team-grid">

        
        {/* Second Year Members */}
        {TeamDetails.secondYear.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (secondYearRef.current[index] = el)}  // Use separate ref for secondYear
          >
            <div className="overlay"></div>
            <div className="circle">
              <img src={member.profileImage} alt={member.name} className="team-photo" />
            </div>
            <h2 style={{ fontFamily: 'fh1' }} className="team-name">{member.name}</h2>
            <p style={{ fontFamily: 'fh2' }} className="team-position">{member.position}</p>
          </div>
        ))}

        {/* Third Year Members */}
        {TeamDetails.thirdYear.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (thirdYearRef.current[index] = el)}  // Use separate ref for thirdYear
          >
            <div className="overlay"></div>
            <div className="circle">
              <img src={member.profileImage} alt={member.name} className="team-photo" />
            </div>
            <h2 style={{ fontFamily: 'fh1' }} className="team-name">{member.name}</h2>
            <p style={{ fontFamily: 'fh2' }} className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
