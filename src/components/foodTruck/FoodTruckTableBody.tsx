import Menu from './Menu';

import FoodTruck from '../../types/FoodTruck';

type FoodTruckTableBodyProps = {
  foodTruck: FoodTruck;
  }

export default function FoodTruckTableBody({ foodTruck }: FoodTruckTableBodyProps) {
  const { location, menu } = foodTruck;
  return (
    <tbody>
      <tr>
        <td>{location}</td>
        <td>
          <Menu
            menu={menu}
          />
        </td>
      </tr>
    </tbody>
  );
}
