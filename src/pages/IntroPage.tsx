import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding-block: 10em 25em; 
  padding-inline: ${(props) => props.theme.sizes.contentPadding};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

const Title = styled.h2`
  font-size: 11rem;
  font-weight: bold;
  margin-bottom: 0.5em;
  display: block;
  text-align: center;
  line-height: 120%;
  color: #FFFFFF;
`;

const SubTitle = styled(Title)`
  font-size: 3rem;
  margin-bottom: 5em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 4.8rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block: 2.5em;
  width: 49%;
  border: 1px solid transparent;
  border-radius: 1em;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  
  &:hover {
    border-color: ${(props) => props.theme.colors.buttonHoverBorder};
    background: ${(props) => props.theme.colors.buttonHoverBackground};
  }
  
  img {
    display: block;
    margin-bottom: 1em;
    width: 40%;
  }
  
  span {
    display: block;
  }
`;

export default function IntroPage() {
  const navigate = useNavigate();

  const handleClickNext = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <Title>UNI;ON</Title>
      <SubTitle>
        2023.05.09 ~ 2023.05.11
      </SubTitle>
      <Wrapper>
        <Button
          type="button"
          onClick={() => handleClickNext('lineup')}
        >
          <img src="/images/fastfood.png" alt="" />
          <span>라인업</span>
        </Button>
        <Button
          type="button"
          onClick={() => handleClickNext('foodtruck')}
        >
          <img src="/images/fastfood.png" alt="" />
          <span>푸드트럭</span>
        </Button>
      </Wrapper>
    </Container>
  );
}
