import styled from 'styled-components';

import Guest from '../../types/Guest';
import ArtistInfo from './ArtistInfo';

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

type ArtistProps = {
  artist: Guest[];
  }

export default function Artist({ artist }: ArtistProps) {
  return (
    <Container>
      {artist.map((guest) => (
        <ArtistInfo
          key={guest.id}
          guest={guest}
        />
      ))}
    </Container>

  );
}
