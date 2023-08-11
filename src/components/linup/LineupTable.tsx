import styled from 'styled-components';

import LineupTableBody from './LineupTableBody';

import Lineup from '../../types/Lineup';

const Container = styled.div`
  padding-block: 3em;
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  border-top-right-radius: ${(props) => props.theme.sizes.contentBorderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
`;

type LineupTableProps = {
    lineups: Lineup[];
}

export default function LineupTable({ lineups }: LineupTableProps) {
  return (
    <Container>
      {lineups.map((lineup) => (
        <table key={lineup.id} border={1}>
          <LineupTableBody
            lineup={lineup}
          />
        </table>
      ))}
    </Container>
  );
}
