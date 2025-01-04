import { createSlice } from '@reduxjs/toolkit';
import img1 from '../assets/Gallery_1.jpg'

// Export static event data directly
export const EventData = [
  { id: 1, title: 'Hackathon', poweredBy: 'TechSoc', image: img1, description: 'A coding competition.' },
  { id: 2, title: 'Finance Summit', poweredBy: 'FiNIT', image: img1, description: 'A finance-focused event.' },
  { id: 3, title: 'Art Exhibition', poweredBy: 'ArtClub', image: img1, description: 'An exhibition of art.' },
  { id: 4, title: 'Music Fest', poweredBy: 'MusicSoc', image: img1, description: 'A music festival.' },
];

// Create the slice
const EventsSlice = createSlice({
  name: 'events',
  initialState: {
    events:EventData, // Static data
    selectedEvent: null,     // Store selected event
  },
  reducers: {
    selectEvent: (state, action) => {
      // Find and set the selected event by ID
      state.selectedEvent = state.events.find(
        (event) => event.id === action.payload
      );
    },
  },
});

// Export actions and reducer
export const { selectEvent } = EventsSlice.actions;
export default EventsSlice.reducer;
