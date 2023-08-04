import MenuInfo from './MenuInfo';

import Food from '../../types/Food';

type MenuProps = {
  menu: Food[];
  }

export default function Menu({ menu }: MenuProps) {
  return (
    <>
      {menu.map((food) => (
        <MenuInfo
          key={food.id}
          food={food}
        />
      ))}
    </>

  );
}
