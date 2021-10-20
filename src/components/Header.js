import React from 'react';
import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import logo from '../images/logo.svg'


const Header = () => {
  return (
    <Container>
      <OuterElement title="bar-top" />
      <ContainerHeader>
        <img src={ logo } alt="logo atrium" />
        <NavigationHeader />
      </ContainerHeader>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

`;

const ContainerHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 34px 0;
  background: transparent;
`;

const OuterElement = styled.div`
  width: 100%;
  height: 5px;
  background: #0087E9;
`;

export default Header;
