import React from 'react';
import styled from 'styled-components';
import NavigationHeader from './NavigationHeader';
import logo from '../images/logo.svg'


const Header = () => {
  return (
    <Container>
      <img src={ logo } alt="ícone de logo" />
      <NavigationHeader />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export default Header;
