import Artist from './Artist';

import Lineup from '../../types/Lineup';

type LineupTableBodyProps = {
    lineup: Lineup;
  }

export default function LineupTableBody({ lineup }: LineupTableBodyProps) {
  const { day, date, artist } = lineup;
  return (
    <tbody>
      <tr>
        <td>{day}</td>
        <td>{date}</td>
        <td>
          <Artist
            artist={artist}
          />
        </td>
      </tr>
    </tbody>
  );
}
