import styled from 'styled-components';

import Categories from '../components/Categories';
import FoodTruckTable from '../components/foodTruck/FoodTruckTable';

import foodtrucks from '../../fixtures/foodTrucks';

const Container = styled.div`
  position: relative;
`;

export default function NoticePage() {
  return (
    <Container>
      <Categories />
      <FoodTruckTable foodTrucks={foodtrucks} />
    </Container>
  );
}
