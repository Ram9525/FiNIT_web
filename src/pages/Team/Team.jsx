import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Team.css';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Team Lead',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Frontend Developer',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    position: 'Backend Developer',
    photo: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Alice Brown',
    position: 'UI Designer',
    photo: 'https://via.placeholder.com/150',
  },
];

const Team = () => {
  const teamRef = useRef([]);

  useEffect(() => {
    
    gsap.fromTo(
      teamRef.current,
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
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="card team-member"
            ref={(el) => (teamRef.current[index] = el)}
          >
            <div className="overlay"></div>
            <div className="circle">
              <img src={member.photo} alt={member.name} className="team-photo" />
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
