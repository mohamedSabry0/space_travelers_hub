import React from 'react';
import { useSelector } from 'react-redux';
import '../Style/Profile.css';

const Profile = () => {
  const mission = useSelector((state) => state.mission);

  const MyMissions = mission && mission.missions ? mission.missions.filter((mission) => mission.reserved === true) : [];

  return (
    <section className="container">
      <main className="header">
        <article>
          <h2>My Missions</h2>
        </article>
        {MyMissions.length === 0 ? (
          <h4>No Missions</h4>
        ) : (
          <ul className="mission-list">
            {MyMissions.map((missions) => (
              <li key={missions.mission_id}>
                <h3>{missions.mission_name}</h3>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Profile;
