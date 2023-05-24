import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Missions from '../Components/Missions';

jest.mock('react-redux');

describe('Should render correct missions', () => {
  test('Should render missions', () => {
    const mockMissions = [
      {
        mission_id: 'mission1',
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: true,
      },
      {
        mission_id: 'mission2',
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: false,
      },
    ];

    useSelector.mockReturnValue(mockMissions);
    useDispatch.mockReturnValue(jest.fn());
    render(<Missions />);

    const missionsCount = screen.getAllByText(/Mission /i);
    expect(missionsCount).toHaveLength(mockMissions.length);
  });
});
