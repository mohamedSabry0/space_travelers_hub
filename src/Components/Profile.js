import React from 'react';
import { useSelector } from 'react-redux';
import '../Style/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);

  const Missions = missions.filter((mission) => mission.reserved);
  return (
    <section className="container">
      <main className="header">
        <article>
          <h2>My Missions</h2>
        </article>
        {Missions.length === 0 ? (
          <h4>No Missions</h4>
        ) : (
          <ul className="mission-list">
            {Missions.map((missions) => (
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
