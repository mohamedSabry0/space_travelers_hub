import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Rockets from '../Components/Rockets';

jest.mock('react-redux');

describe('render rockets', () => {
  test('Should render list of rockets', () => {
    const mockedRocketArray = {
      rockets:
      [
        {
          id: 1,
          name: 'Falcon 1',
          description: 'Lorem',
          reserved: false,
        },
        {
          id: 2,
          name: 'Falcon 2',
          description: 'Lorem',
          reserved: false,
        },
      ],
    };

    useSelector.mockReturnValue(mockedRocketArray);
    useDispatch.mockReturnValue(jest.fn());

    render(<Rockets />);

    const listOfRockets = screen.getAllByRole('listitem');
    expect(listOfRockets).toHaveLength(mockedRocketArray.rockets.length);
  });
});
