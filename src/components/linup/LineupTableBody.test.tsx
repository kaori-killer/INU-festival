import { render, screen } from '@testing-library/react';

import LineupTableBody from './LineupTableBody';
import fixtures from '../../../fixtures';

describe('LineupTableBody', () => {
  const lineup = {
    id: 'LINEUP_01',
    day: 'DAY1',
    date: '230509',
    artist: [...fixtures.guests],
  };

  it('renders lineup information', () => {
    render((
      <table>
        <LineupTableBody lineup={lineup} />
      </table>
    ));

    screen.getByText(/10cm/);
    screen.getByText(/YB/);
  });
});
