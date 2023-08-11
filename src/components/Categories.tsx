import styled from 'styled-components';

import Category from './Category';

const Container = styled.ul`
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
`;

type Path = {
  [key: string]: string;
}

export default function Categories() {
  const categories = ['라인업', '푸드트럭', '부스위치', '공지사항'];
  const path: Path = {
    '/lineup': '라인업',
    '/foodtruck': '푸드트럭',
    '/booth': '부스위치',
    '/anno': '공지사항',
  };
  const { pathname } = window.location;
  const selectedCategory = path[pathname];

  return (
    <Container>
      {categories.map((category: string) => (
        <Category
          key={category}
          active={category === selectedCategory}
          category={category}
        />
      ))}
    </Container>
  );
}
