import { configureStore } from '@reduxjs/toolkit';
import EventsReducer from '../Features/EventSlice';

const Store = configureStore({
  reducer: {
    events: EventsReducer,
  },
});

export default Store;
