import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../Redux/mission/missionSlice';
import '../Style/Mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.mission.mission);
  console.log(missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th className="mission">Mission</th>
          <th className="description">Description</th>
          <th className="status">Status</th>
          <th className="join">Join missions</th>
        </tr>
      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="mission_name_cell">{mission.mission_name}</td>
            <td className="description_cell">{mission.description}</td>
            <td className="status_cell">
              {mission.reserved ? (
                <div className="status_active_label">Active Member</div>
              ) : (
                <div className="status_label">Not a Member</div>
              )}
            </td>
            <td className="join_button_cell">
              {mission.reserved ? (
                <input
                  type="submit"
                  className="join_mission_reserved_btn"
                  value="Leave Mission"
                  onClick={() => {
                    dispatch(leaveMission(mission.mission_id));
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="join_mission_btn"
                  value="Join Mission"
                  onClick={() => {
                    dispatch(joinMission(mission.mission_id));
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default Missions;
