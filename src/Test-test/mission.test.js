import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Missions from './Missions';
import { fetchMissions, joinMission, leaveMission } from '../Redux/mission/missionSlice';

const mockStore = configureStore([]);

// Define initial state for the store
const initialState = {
  missions: {
    missions: [
      { mission_id: 1, mission_name: 'Mission 1', description: 'Mission 1 description', reserved: false },
      { mission_id: 2, mission_name: 'Mission 2', description: 'Mission 2 description', reserved: true },
    ],
  },
};


jest.mock('../Redux/mission/missionSlice', () => ({
  fetchMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

describe('Missions', () => {
  let store;

  beforeEach(() => {

    store = mockStore(initialState);
  });

  test('renders mission table with data', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 1 description')).toBeInTheDocument();
    expect(getByText('Not a Member')).toBeInTheDocument();

    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Mission 2 description')).toBeInTheDocument();
    expect(getByText('Active Member')).toBeInTheDocument();
  });

  test('dispatches joinMission action when join mission button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    const joinButton = getByText('Join Mission');
    fireEvent.click(joinButton);

    expect(joinMission).toHaveBeenCalledWith(1);
  });

  test('dispatches leaveMission action when leave mission button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>
    );

    const leaveButton = getByText('Leave Mission');
    fireEvent.click(leaveButton);

    expect(leaveMission).toHaveBeenCalledWith(2);
  });


});
