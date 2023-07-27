import { render, screen } from '@testing-library/react';

import Artist from './Artist';

import fixtures from '../../../fixtures';

const context = describe;

describe('Artist', () => {
  context('with artist', () => {
    const artist = fixtures.guests;

    it('renders guests list', () => {
      render(<Artist artist={artist} />);

      screen.getByText(/10cm/);
      screen.getByText(/YB/);
    });
  });
});
