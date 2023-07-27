import Guest from '../../types/Guest';
import ArtistInfo from './ArtistInfo';

type ArtistProps = {
  artist: Guest[];
  }

export default function Artist({ artist }: ArtistProps) {
  return (
    <>
      {artist.map((guest) => (
        <ArtistInfo
          key={guest.id}
          guest={guest}
        />
      ))}
    </>

  );
}
