import React from 'react';
import styled from 'styled-components';
import ListFooter from './ListFooter';
import logoFooter from '../images/logo-bottom.svg';

const Footer = () => {
  const data = [
    {
      title: 'Instituição',
      links: [
        'História',
        'Atritum em Números',
        'Visite os campi',
        'Endereeços',
        'Estatuto e regulamentos',
      ],
    },
    {
      title: 'Administração',
      links: [
        'Reitoria',
        'Vice-reitoria',
        'Conselhos and Assembleias',
        'Decanato',
        'Secretarias',
        'Prefeitura',
      ],
    },
    {
    title: 'Acadêmico',
    links: [
      'Faculdades',
      'Institutos',
      'Centros',
      'Ensino à distância',
      'Assuntos internacionais',
    ],
  },
  {
    title: 'Serviços',
    links: [
      'Reitoria',
      'Vice-reitoria',
      'Conselhos and Assembleias',
      'Decanato',
      'Secretarias',
      'Prefeitura',
    ],
  },
  {
    title: 'Comunicação',
    links: [
      'Reitoria',
      'Vice-reitoria',
      'Conselhos and Assembleias',
      'Decanato',
      'Secretarias',
      'Prefeitura',
    ],
  },
];

  // const renderInformationResponsive = () => {
    
  // };

  return (
    <>
    <Container>
      <FooterContainer>
        {data.map(({ title, links}, index) => (
          <ListFooter title={ title } links={ links } key={index} />
          ))}
      </FooterContainer>
      <img src={logoFooter} alt="icone da logo" />
    </Container>
    <BorderBottom />
    </>
  );
}

const Container = styled.div`
  padding-top: 53px;
  background: #FFF;
  width: 100%;
  margin-top: 20px;
  display: flex;
  top: 40px;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-bottom: -58px;
  box-shadow: 0px 31px 0px rgba(0, 0, 50, 0.03), 0px 16px 0px rgba(0, 0, 90, 0.05);
  border-radius: 0 0 100px 100px;
  img {
    width: 116px;
    height: 29px;
    padding: 50px 0 60px 0;
  }
`;

const BorderBottom = styled.div`
  position: static;
  height: 192px;
  width: 100%;
  background: linear-gradient(262.38deg, rgba(0, 135, 233, 0.24) 0.58%, rgba(28, 183, 183, 0.24) 100%);;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #FFF;
  border-radius: 0 0 100px 100px;
`;

export default Footer;
