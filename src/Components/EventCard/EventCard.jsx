import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectEvent } from '../../Features/EventSlice';

const EventCard = ({ id, title, poweredBy, image, description }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  return (
    <div 
      className={`EventCard relative w-72 h-96 rounded-2xl overflow-hidden transition-transform duration-500 ease-in-out ${hover ? 'scale-105' : 'scale-100'}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`absolute inset-0 flex flex-col justify-end p-4 bg-white bg-opacity-30 border-2 border-white rounded-lg transition-all duration-500 ease-in-out ${hover ? 'translate-y-[-70%]' : 'translate-y-0'}`}>
        <p className="text-2xl font-bold uppercase text-black">{title}</p>
        <p className="text-lg">Powered By</p>
        <p className="text-lg text-black">{poweredBy}</p>
      </div>
      {hover && (
        <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-75 p-4 rounded-lg transition-opacity duration-500 ease-in-out">
          <p className="text-sm text-gray-700 overflow-hidden line-clamp-2">
  {description}
</p>
          <Link to={`/events/${id}`}>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-teal-500 transition-all"
          onClick={()=>dispatch(selectEvent(id))} >
            Know more
          </button>
            </Link>
        </div>
      )}
    </div>
  );
};

export default EventCard;
