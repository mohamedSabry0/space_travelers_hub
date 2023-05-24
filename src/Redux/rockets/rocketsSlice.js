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
      .addCase(fetchRockets.fulfilled, (state, { payload }) => {
        console.log(payload);
        return {
          ...state,
          rockets: [...payload.map((rocket) => ({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            flickerImages: rocket.flickr_images,
          }))],
        };
      });
  },
});

export const rocketsSelector = (state) => state.rockets;
export default rocketsSlice.reducer;
