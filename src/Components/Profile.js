import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const mission = mission = useSelector((state) => state.mission.missions);

  const MyMissions = mission.filter((mission) => mission.reserved === true);
  return (
    <section>
      <main>
        <article>
          <h>My Missions</h>
        </article>
        {MyMissions.length === 0 ? (
          <h4>No Mission</h4>
        ) : (
          <ul>
            {MyMissions.map((missions) => (
              <h3 key={missions.mission_id}>{missions.mission_name}</h3>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
};

export default Profile;
