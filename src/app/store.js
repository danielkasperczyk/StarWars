import { configureStore } from '@reduxjs/toolkit';
import heroesSlice from '../features/heroes/heroesSlice';

export default configureStore({
  reducer: {
    hero: heroesSlice,
  },
});
