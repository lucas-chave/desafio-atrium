import React from 'react';
import styled from 'styled-components';
import setaNavigation from '../images/seta.svg';

const NavigationSection = () => {
  return (
    <Container>
      <ul>
        <li>Inscrição</li>
        <div />
        <li>Conheça</li>
        <div />
        <li>Extensão</li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  margin: 90px 0 140px 0;
  align-self: flex-end;
  position: relative;
  height: 121px;
  background: #0087E9;
  border-radius: 10px 0 0 10px;
  ul {
    display: flex;
    li {
      display: flex;
      align-self: center;
      justify-content: center;
      list-style: none;
      margin: 16px;
      padding: 10px;
      font-family: Spectral SC;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 46px;
      align-items: center;
      color: #FFFFFF;

      &::after {
        content: url(${ setaNavigation });
        color: black;
        margin-left: 30px;
      }
    }

    div {
      width: 1px;
      height: 78;
      background: rgba(255, 255, 255, 0.13);
    }
  }

`;

export default NavigationSection;
