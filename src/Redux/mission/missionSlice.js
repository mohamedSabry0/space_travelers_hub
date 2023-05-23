import { createSlice } from '@reduxjs/toolkit';
import Missions from '../../Components/Missions';

const missionState = {
  mission: [],
}
const missionSlice = createSlice({
    name: 'mission',
    initialState: missionState,
    reducers: {
        joinMission: (state, {payload}) => {
            state.Missions = state.mission.map((mission)) =>{
                if(mission.mission_id ! == payload) {
                    return mission;
                }
                return {...mission, reserve: true};
            }
        }
    }
})

export const {joinMission} = missionSlice.actions;
export default missionSlice.reducers;