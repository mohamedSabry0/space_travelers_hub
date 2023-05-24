import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Profile from '../Components/Profile';

const mockStore = configureStore([]);

const initialState = {
  missions: {
    missions: [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: false },
    ],
  },
  rockets: {
    rockets: [
      { id: 1, name: 'Rocket 1', reserved: true },
      { id: 2, name: 'Rocket 2', reserved: false },
    ],
  },
};

const store = mockStore(initialState);

test('renders profile with mission and rocket data', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );

  expect(getByText('My Missions')).toBeInTheDocument();
  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('My Rockets')).toBeInTheDocument();
  expect(getByText('Rocket 1')).toBeInTheDocument();
  const listOfItems = screen.getAllByRole('listitem');
  expect(listOfItems).toHaveLength(2);
});
