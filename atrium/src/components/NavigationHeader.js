import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import iconSearch from '../images/iconSearch.svg';

const NavigationHeader = () => {
  const [traceElement, setTraceElement] = useState('Educação');

  useEffect(() => {
  const changeTraceLink = () => {
    const education = document.querySelector('#Educação')
    const search = document.querySelector('#Pesquisa')
    const student = document.querySelector('#Alunos')
    const admission = document.querySelector('#Admissão')

    if (traceElement === education.innerHTML) {
      search.classList.remove('traceBottom');
      student.classList.remove('traceBottom');
      admission.classList.remove('traceBottom');
      education.classList.add('traceBottom');
    }
    if (traceElement === search.innerHTML) {
      search.classList.add('traceBottom');
      student.classList.remove('traceBottom');
      admission.classList.remove('traceBottom');
      education.classList.remove('traceBottom');
    }
    if (traceElement === student.innerHTML) {
      search.classList.remove('traceBottom');
      student.classList.add('traceBottom');
      admission.classList.remove('traceBottom');
      education.classList.remove('traceBottom');
    }
    if (traceElement === admission.innerHTML) {
      search.classList.remove('traceBottom');
      student.classList.remove('traceBottom');
      admission.classList.add('traceBottom');
      education.classList.remove('traceBottom');
    }
  }
    changeTraceLink();
  }, [traceElement]);
  return (
    <Navigation>
      <ul>
        <li onClick={({ target }) => setTraceElement(target.id)} id="Educação">Educação</li>
        <li onClick={({ target }) => setTraceElement(target.id)} id="Pesquisa">Pesquisa</li>
        <li onClick={({ target }) => setTraceElement(target.id)} id="Alunos">Alunos</li>
        <li onClick={({ target }) => setTraceElement(target.id)} id="Admissão" className="traceBottom">Admissão</li>
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
      list-style: none;
      font-family: 'Nunito', sans-serif;
      font-weight: bold;
      font-size: 17px;
      line-height: 23px;
      align-items: center;
      text-align: center;
      color: #0087E9;
      margin: 0 0 0 107px;
      cursor: pointer;
    }

    .traceBottom {
      &::after {
      content: '';
      display: block;
      width: 80px;
      height: 30px;
      border: solid 5px #000;
      border-color: transparent transparent #01DDE9 transparent;
      border-radius: 50px 10px 160px 80%/25px;
      margin: -35px 0 0 0;
    }
    }
  }
`;

export default NavigationHeader;
