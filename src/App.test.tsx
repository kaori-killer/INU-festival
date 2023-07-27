import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders lineups', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/10cm/);
      screen.getByText(/YB/);
    });
  });
});
