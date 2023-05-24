import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRockets from '../Redux/rockets/rocketsThunk';
import { rocketsSelector } from '../Redux/rockets/rocketsSlice';
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
          id, name, description, flickerImage,
        }) => (
          <li key={id}>
            <img src={flickerImage} alt="rocket" />
            <article>
              <h2>{name}</h2>
              <p>{description}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rockets;
