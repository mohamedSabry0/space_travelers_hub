import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../Redux/rockets/rocketsThunk';
import { rocketsSelector, toggleReserveRocket } from '../Redux/rockets/rocketsSlice';
import '../Style/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector(rocketsSelector);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <section>
      <ul className="rockets-list">
        { rockets && rockets.map(({
          id, name, description, flickerImage, reserved,
        }) => (
          <li key={id}>
            <img src={flickerImage} alt="rocket" />
            <article>
              <h4>{name}</h4>
              <p>
                { reserved && (<span className="reserved-tag">Reserved</span>) }
                {description}
              </p>
              <button
                onClick={() => {
                  dispatch(toggleReserveRocket(id));
                }}
                type="button"
                className={`reserve-btn ${reserved ? 'reserved' : ''}`}
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
