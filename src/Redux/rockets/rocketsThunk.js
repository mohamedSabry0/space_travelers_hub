import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const rockets = await fetch('https://api.spacexdata.com/v4/rockets')
    .then((data) => data.json()).catch((error) => {
      throw new Error(`HTTP error! Error: ${error}`);
    });
  return rockets;
});

export default fetchRockets;
