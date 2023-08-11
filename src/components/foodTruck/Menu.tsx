import styled from 'styled-components';

import MenuInfo from './MenuInfo';

import Food from '../../types/Food';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

type MenuProps = {
  menu: Food[];
  }

export default function Menu({ menu }: MenuProps) {
  return (
    <Container>
      {menu.map((food) => (
        <MenuInfo
          key={food.id}
          food={food}
        />
      ))}
    </Container>

  );
}
