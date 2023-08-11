import { useState } from 'react';

import styled from 'styled-components';

import Menu from './Menu';

import FoodTruck from '../../types/FoodTruck';

const Row = styled.tr`
  display: flex;
  flex-direction: column;
  padding-block: 3em;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};
  
  &:last-of-type {
    border-bottom: 0;    
  }
  
  td:first-of-type {
    font-size: 4.8rem;
    font-weight: bold;
    margin-bottom: .5em;
  }
  
  td:last-of-type {
    width: 100%;
  }
`;

type coordinaetType = {
  latitude: number,
  longitude: number,
}

type FoodTruckTableBodyProps = {
  foodTruck: FoodTruck;
  setCoordinaet: (value: coordinaetType) => void;
  setOpenMenuId: (value: string) => void;
  isOpen: boolean;
  }

export default function FoodTruckTableBody({
  foodTruck,
  setCoordinaet,
  setOpenMenuId,
  isOpen,
}: FoodTruckTableBodyProps) {
  const {
    id, location, coordinate, menu,
  } = foodTruck;
  const { latitude, longitude } = coordinate;

  const [isClick, setIsClick] = useState(false);

  const handleClick = (() => {
    setCoordinaet({ latitude, longitude });
    setOpenMenuId(id);
    setIsClick(!isClick);
  });

  return (
    <tbody>
      <Row>
        <td
          onClick={handleClick}
        >
          {location}
        </td>
        <td>
          {isOpen && isClick && <Menu menu={menu} /> }
        </td>
      </Row>
    </tbody>
  );
}
