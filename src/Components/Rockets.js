import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import fetchRockets from '../Redux/rockets/rocketsThunk';
import { rocketsSelector } from '../Redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector(rocketsSelector);

  // fetch rockets only once
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  console.log(rockets);

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <img src={rocket.flickerImages[0]} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
