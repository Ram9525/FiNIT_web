import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvent } from '../../Features/EventSlice';

const EventDetails = () => {
  const { eventId } = useParams(); // Get ID from URL params
  const dispatch = useDispatch();

  // Get selected event from Redux store
  const { selectedEvent } = useSelector((state) => state.events);
  console.log(selectedEvent)

  useEffect(() => {
    // Dispatch selectEvent action if eventId is available
    if (eventId) {
      dispatch(selectEvent(Number(eventId))); // Ensure ID is a number
    }
  }, [eventId, dispatch]);

  return (
    <div className="container mx-auto py-24 px-6 bg-gradient-to-r from-teal-100 via-purple-100 to-teal-50 rounded-lg shadow-lg">
  {selectedEvent ? (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <img 
        src={selectedEvent.image} 
        alt={selectedEvent.title} 
        className="w-full h-96 object-cover mb-6 rounded-lg shadow-md"
      />
      <h1 style={{fontFamily:'fh1'}} className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500 mb-4 hover:scale-105 transition-transform duration-300 ease-in-out">
        {selectedEvent.title}
      </h1>
      <p style={{fontFamily:'fh2'}} className="text-lg text-gray-700 mb-4">
        {selectedEvent.description}
      </p>
      <p className="text-sm text-gray-500 italic">Powered by: 
        <span className="font-semibold text-teal-600"> {selectedEvent.poweredBy}</span>
      </p>
    </div>
  ) : (
    <div className="text-center text-blue-500 text-lg font-medium">Fetching event details...</div>
  )}
</div>

  );
};

export default EventDetails;
