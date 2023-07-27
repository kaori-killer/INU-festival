import { render, screen } from '@testing-library/react';

import LineupTable from './LineupTable';

import fixtures from '../../../fixtures';

describe('LineupTable', () => {
  const { lineups } = fixtures;

  it('renders lineups', () => {
    render(<LineupTable lineups={lineups} />);

    screen.getByText(/10cm/);
    screen.getByText(/YB/);
    screen.getByText(/18:00/);
  });
});
