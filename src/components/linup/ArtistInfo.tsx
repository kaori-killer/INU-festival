import Guest from '../../types/Guest';

type ArtistInfoProps = {
    guest: Guest
}

export default function ArtistInfo({ guest }: ArtistInfoProps) {
  const { img, name, time } = guest;

  return (
    <ul>
      <li><img src={img} alt="guest-img" /></li>
      <li>{name}</li>
      <li>{time}</li>
    </ul>
  );
}
