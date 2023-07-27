import { render, screen } from '@testing-library/react';
import LineupTableHead from './LineupTableHead';

describe('LineupTableHead', () => {
  const dayHeadTitle = 'test1';
  const dateHeadTitle = 'test2';
  const artistHeadTitle = 'test3';

  it('renders elements', () => {
    render((
      <table>
        <LineupTableHead
          dayHeadTitle={dayHeadTitle}
          dateHeadTitle={dateHeadTitle}
          artistHeadTitle={artistHeadTitle}
        />
      </table>
    ));

    screen.getByText(dayHeadTitle);
    screen.getByText(dateHeadTitle);
    screen.getByText(artistHeadTitle);
  });
});
