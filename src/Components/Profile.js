import React from 'react';
import { useSelector } from 'react-redux';
import '../Style/Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missions);

  const Missions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="main-container">

      <main className="container">
        <article>
          <h2>My Missions</h2>
        </article>
        {Missions.length === 0 ? (
          <h4>No Missions</h4>
        ) : (
          <ul className="items-list">
            {Missions.map((missions) => (
              <li key={missions.mission_id}>
                <h3>{missions.mission_name}</h3>
              </li>
            ))}
          </ul>
        )}
      </main>

      <main className="container">
        <article>
          <h2>My Rockets</h2>
        </article>
        {reservedRockets.length === 0 ? (
          <h4>No Rockets</h4>
        ) : (
          <ul className="items-list">
            {reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <h3>{rocket.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </main>

    </section>
  );
};

export default Profile;
