import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  // Perform the API call or data retrieval to fetch the mission data
  // Replace the following line with your actual data fetching code
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();

  // Return the fetched data
  return data;
});

const initialState = {
  missions: [],
  // Add other relevant state properties if needed
};
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      // Update the state to mark a mission as reserved
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = true;
      }
    },
    leaveMission(state, action) {
      // Update the state to mark a mission as not reserved
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      // Update the state with the fetched mission data
      state.missions = action.payload;
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
