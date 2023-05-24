import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './rocketsThunk';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    toggleReserveRocket: (state, { payload }) => (
      {
        ...state,
        rockets: [...state.rockets.map((rocket) => {
          if (rocket.id === payload) {
            return {
              ...rocket,
              reserved: !rocket.reserved,
            };
          }
          return rocket;
        })],
      }
    ),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state, { payload }) => ({
        ...state,
        rockets: [...payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickerImage: rocket.flickr_images[0],
          reserved: false,
        }))],
      }));
  },
});

export const rocketsSelector = (state) => state.rockets;
export const { toggleReserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
