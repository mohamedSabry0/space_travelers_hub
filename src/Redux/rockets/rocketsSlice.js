import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from './rocketsThunk';

const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state, { payload }) => ({
        ...state,
        rockets: [...payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          description: rocket.description,
          flickerImage: rocket.flickr_images[0],
        }))],
      }));
  },
});

export const rocketsSelector = (state) => state.rockets;
export default rocketsSlice.reducer;
