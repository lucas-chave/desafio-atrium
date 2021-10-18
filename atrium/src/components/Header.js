import React from 'react';
import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import logo from '../images/logo.svg'


const Header = () => {
  return (
    <Container>
      <OuterElement />
      <ContainerHeader>
        <img src={ logo } alt="ícone de logo" />
        <NavigationHeader />
      </ContainerHeader>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 34px 0;
  background: transparent;
  position: relative;
`;

const OuterElement = styled.div`
  width: 100%;
  height: 5px;
  background: #0087E9;
`;

export default Header;
