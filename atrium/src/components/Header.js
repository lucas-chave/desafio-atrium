import React from 'react';
import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import logo from '../images/logo.svg'


const Header = () => {
  return (
    <>
      <OuterElement />
      <Container>
        <img src={ logo } alt="ícone de logo" />
        <NavigationHeader />
      </Container>
    </>
  );
};

const Container = styled.header`
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
