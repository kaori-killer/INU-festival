import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

const Container = styled.li`
  width: 25%;
`;

type ButtonProps = {
  active: boolean;
};

const Button = styled.button<ButtonProps>`
  font-size: 4rem;
  padding-block: .5em;
  width: 100%;
  border: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background: transparent;
  color: #FFFFFF;
  cursor: pointer;
  
  ${(props) => props.active && css`
    color: #FF8400;
    background: ${props.theme.colors.secondary};
    transition: .3s;
  `}
`;

type CategoryProps = {
  active: boolean;
  category: string;
}

type Path = {
  [key: string]: string;
}

export default function Category({
  active,
  category,
}: CategoryProps) {
  const path: Path = {
    라인업: '/lineup',
    푸드트럭: '/foodtruck',
    부스위치: '/booth',
    공지사항: '/notice',
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path[category]);
  };

  return (
    <Container>
      <Button
        type="button"
        active={active}
        onClick={handleClick}
      >
        {category}
      </Button>
    </Container>
  );
}
