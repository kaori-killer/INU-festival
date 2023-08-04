import LineupTableBody from './LineupTableBody';
import LineupTableHead from './LineupTableHead';

import Lineup from '../../types/Lineup';

type LineupTableProps = {
    lineups: Lineup[];
}

export default function LineupTable({ lineups }: LineupTableProps) {
  const dayHeadTitle = 'DAY';
  const dateHeadTitle = '날짜';
  const artistHeadTitle = '아티스트';

  return (
    <div>
      <h2>라인업</h2>
      {lineups.map((lineup) => (
        <table key={lineup.id} border={1}>
          <LineupTableHead
            firstTitle={dayHeadTitle}
            secondTitle={dateHeadTitle}
            thirdTitle={artistHeadTitle}
          />
          <LineupTableBody
            lineup={lineup}
          />
        </table>
      ))}
    </div>
  );
}
