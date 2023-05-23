import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMissions = createAsyncThunk('missions/fetchMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();

    return data;
  });

const initialState = {
  missions: [],

};
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = true;
      }
    },
    leaveMission(state, action) {
      const missionId = action.payload;
      const mission = state.missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload || [];
    });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
