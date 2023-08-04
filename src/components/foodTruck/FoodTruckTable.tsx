import LineupTableHead from '../linup/LineupTableHead';
import FoodTruckTableBody from './FoodTruckTableBody';
import Map
  from '../Map';
import FoodTruck from '../../types/FoodTruck';

type LineupTableProps = {
    foodTrucks: FoodTruck[];
}

export default function FoodTruckTable({ foodTrucks }: LineupTableProps) {
  const firestTitle = '위치';
  const secondTitle = '음식';

  return (
    <div>
      <h2>푸드트럭</h2>
      <Map
        latitude={37.376030790483306}
        longitude={126.6344256401589}
      />
      {foodTrucks.map((foodTruck) => (
        <table key={foodTruck.id} border={1}>
          <LineupTableHead
            firstTitle={firestTitle}
            secondTitle={secondTitle}
          />
          <FoodTruckTableBody
            foodTruck={foodTruck}
          />
        </table>
      ))}
    </div>
  );
}
