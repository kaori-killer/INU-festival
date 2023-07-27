import LineupTableBody from '../linup/LineupTableBody';
import LineupTableHead from '../linup/LineupTableHead';

import FoodTruck from '../../types/FoodTruck';

type LineupTableProps = {
    foodTrucks: FoodTruck[];
}

export default function FoodTruckTable({ foodTrucks }: LineupTableProps) {
  const dayHeadTitle = 'DAY';
  const dateHeadTitle = '날짜';
  const artistHeadTitle = '아티스트';

  return (
    <div>
      <h2>푸드트럭</h2>
      {foodTrucks.map((foodTrucks) => (
        <table key={foodTrucks.id} border={1}>
          <LineupTableHead
            dayHeadTitle={dayHeadTitle}
            dateHeadTitle={dateHeadTitle}
            artistHeadTitle={artistHeadTitle}
          />
          <LineupTableBody
            lineup={lineup}
          />
        </table>
      ))}
    </div>
  );
}
