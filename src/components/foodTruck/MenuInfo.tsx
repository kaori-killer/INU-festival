import Food from '../../types/Food';

type MenuInfoProps = {
    food: Food
}

export default function MenuInfo({ food }: MenuInfoProps) {
  const { img, name } = food;

  return (
    <ul>
      <li><img src={img} alt="food-img" /></li>
      <li>{name}</li>
    </ul>
  );
}
