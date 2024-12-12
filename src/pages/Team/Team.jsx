import React from 'react';
import './Team.css'; // Import the Team.css file for additional styling

const teamMembers = [
  { name: 'Alice Johnson', role: 'Project Manager', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Bob Smith', role: 'Lead Developer', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Charlie Brown', role: 'UI/UX Designer', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Dana Lee', role: 'QA Engineer', imageUrl: 'https://via.placeholder.com/150' },
];

const Team = () => {
  return (
    <section className="team-section py-12 px-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
