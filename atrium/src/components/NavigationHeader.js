import React from 'react';
import iconSearch from '../images/iconSearch.svg';

const NavigationHeader = () => {
  return (
    <nav>
      <ul>
        <li>Educação</li>
        <li>Pesquisa</li>
        <li>Alunos</li>
        <li>Admissão</li>
        <li><img src={ iconSearch } alt="icone de pesquisa" /></li>
      </ul>
    </nav>
  );
}

export default NavigationHeader;
