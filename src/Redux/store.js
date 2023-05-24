import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './mission/missionSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketsReducer,
  },
});

export default store;
