import styled from 'styled-components';

import Artist from './Artist';

import Lineup from '../../types/Lineup';

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

type LineupTableBodyProps = {
    lineup: Lineup;
  }

export default function FoodTruckTableBody({ lineup }: LineupTableBodyProps) {
  const { day, artist } = lineup;
  return (
    <tbody>
      <Row>
        <td>{day}</td>
        <td>
          <Artist
            artist={artist}
          />
        </td>
      </Row>
    </tbody>
  );
}
