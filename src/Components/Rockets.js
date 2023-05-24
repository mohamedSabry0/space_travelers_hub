import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../Redux/rockets/rocketsThunk';
import { rocketsSelector, toggleReserveRocket } from '../Redux/rockets/rocketsSlice';
import '../Style/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector(rocketsSelector);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <section>
      <ul className="rockets-list">
        { rockets && rockets.map(({
          id, name, description, flickerImage, reserved,
        }) => (
          <li key={id}>
            <img src={flickerImage} alt="rocket" />
            <article>
              <h2>{name}</h2>
              { reserved && (<span>Reserved</span>) }
              <p>{description}</p>
              <button
                onClick={() => {
                  dispatch(toggleReserveRocket(id));
                }}
                type="button"
                className="reserve-btn"
              >
                {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
