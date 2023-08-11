import styled from 'styled-components';

import Guest from '../../types/Guest';

const Container = styled.li`
  width: 30%;
`;

const Item = styled.button`
  border: 1px solid ${(props) => props.theme.colors.tertiary};
  border-radius: 2em;
  margin: 0;
  padding: 1em;
  background-color: ${(props) => props.theme.colors.tertiary};
  text-align: start;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  width: 100%;
  height: 100%;

  /* &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  } */
  
  img {
    display: block;
    margin: 0 auto;
    width: 75%;
  }

  span {
    font-size: 3.2rem;
    display: block;
    padding-block: .2em;
  }
`;

type ArtistInfoProps = {
    guest: Guest
}

export default function ArtistInfo({ guest }: ArtistInfoProps) {
  const { img, name, time } = guest;

  return (
    <Container>
      <Item
        type="button"
      >
        <img src={img} alt="guest-img" />
        <span>{name}</span>
        <span>{time}</span>
      </Item>
    </Container>
  );
}
