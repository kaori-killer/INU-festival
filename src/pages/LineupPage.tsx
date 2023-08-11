import styled from 'styled-components';

import Categories from '../components/Categories';
import LineupTable from '../components/linup/LineupTable';

import lineups from '../../fixtures/lineups';

const Container = styled.div`
  position: relative;
`;

export default function LineupPage() {
  return (
    <Container>
      <Categories />
      <LineupTable lineups={lineups} />
    </Container>
  );
}
