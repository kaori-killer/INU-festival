import { useState } from 'react';

import styled from 'styled-components';

import FoodTruckTableBody from './FoodTruckTableBody';

import Map from '../Map';

import FoodTruck from '../../types/FoodTruck';

const Container = styled.div`
  padding-block: 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
`;

type LineupTableProps = {
    foodTrucks: FoodTruck[];
}

export default function FoodTruckTable({ foodTrucks }: LineupTableProps) {
  const [coordinate, setCoordinaet] = useState({
    latitude: 37.37590385533033,
    longitude: 126.63416940319811,
  });
  const [openMenuId, setOpenMenuId] = useState<string>('FOODTRUCKS_01');

  return (
    <Container>
      <Map
        latitude={coordinate.latitude}
        longitude={coordinate.longitude}
      />
      {foodTrucks.map((foodTruck) => (
        <table key={foodTruck.id} border={1}>
          <FoodTruckTableBody
            foodTruck={foodTruck}
            setCoordinaet={setCoordinaet}
            setOpenMenuId={setOpenMenuId}
            isOpen={openMenuId === foodTruck.id}
          />
        </table>
      ))}
    </Container>
  );
}
