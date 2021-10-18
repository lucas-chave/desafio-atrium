import React from 'react';
import styled from 'styled-components';
import iconSearch from '../images/iconSearch.svg';

const NavigationHeader = () => {
  return (
    <Navigation>
      <ul>
        <li>Educação</li>
        <li>Pesquisa</li>
        <li>Alunos</li>
        <li>Admissão</li>
        <li><img src={ iconSearch } alt="icone de pesquisa" /></li>
      </ul>
    </Navigation>
  );
};

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      display: flex;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      font-size: 17px;
      line-height: 23px;
      align-items: center;
      text-align: center;
      color: #0087E9;
      margin: 0px 53.5px;
      cursor: pointer;
    }
  }
`;

export default NavigationHeader;
