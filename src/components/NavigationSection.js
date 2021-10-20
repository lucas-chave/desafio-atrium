import React from 'react';
import styled from 'styled-components';
import setaNavigation from '../images/seta.svg';

const NavigationSection = () => {
  return (
    <Container title="sectionNavigation">
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
      font-weight: normal;
      font-size: 30px;
      line-height: 46px;
      align-items: center;
      color: #FFFFFF;
      cursor: pointer;
      &::after {
        content: url(${ setaNavigation });
        display: flex;
        align-self: center;
        margin-left: 30px;
        @media screen and (max-width: 720px) {
          margin-left: 15px;
          margin-top: 12px;
        }
        @media screen and (max-width: 540px) {
          display: none;
          margin: 0;
        }
      }
      @media screen and (max-width: 920px) {
        font-size: 24px;
      }

      @media screen and (max-width: 720px) {
        font-size: 16px;
      }
      @media screen and (max-width: 540px) {
        font-size: 14px;
        margin-left: 0;
      }
    }

    div {
      width: 1px;
      height: 78;
      background: rgba(255, 255, 255, 0.13);
    }
  }
  @media screen and (max-width: 920px) {
    height: 90px;
  }
  @media screen and (max-width: 720px) {
    height: 60px;
  }
  @media screen and (max-width: 540px) {
    height: 50px;
    border-radius: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    ul {
      margin: 0;
      padding: 0;

      li {
        margin: 6px;
        padding: 8px ;
      }
    }
  }
`;

export default NavigationSection;
