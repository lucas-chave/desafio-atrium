import React from 'react';
import styled from 'styled-components';
import image1 from '../images/unsplash_YRMWVcdyhmI.jpg';
import setaSelect from '../images/setaSelect.svg';

const SectionInfo = () => {
  return (
    <Container>
      <Title>Conheça a universidade</Title>
      <SubContainer>
        <img src={ image1 } alt="imagem de um auditório" />
        <ContainerTexts>
          <SubTitle>Trace sua jornada</SubTitle>
          <p>
            Trace sua jornada. Um dos pressupostos essenciais da chamada sociedade ou economia do conhecimento é, para
            muito além da capacidade de produção e de reprodução industriais, a capacidade de gerar conhecimento
            tecnológico e, por meio dele, inovar constantemente para um mercado ávido e nervoso nas exigências de consumo.
          </p>
          <Select>
            <option>Cursos</option>
            <option>Literatura</option>
          </Select>
        </ContainerTexts>
      </SubContainer>
      <SubContainer>
        <ContainerTexts>
          <SubTitle>Biblioteca Central</SubTitle>
          <p>
          Com um acervo digitalizado de mais de 20.000 obras, a Biblioteca Central está de portas abertas para a comunidade acadêmica.
          </p>
          <Select>
            <option>Cursos</option>
            <option>Cursos</option>
          </Select>
        </ContainerTexts>
        <img src={ image1 } alt="imagem de um auditório" />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  flex-direction: column;
  position: absolute;
  margin-top: 10%;
`;

const Title = styled.h4`
  font-family: Spectral SC;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  display: flex;
  align-items: center;
  color: #0087E9;
  margin-left: 140px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SubTitle = styled.h4`
  font-family: Spectral;
  font-style: normal;
  font-weight: normal;
  font-size: 43px;
  line-height: 45px;
  color: #0087E9;
  margin: 0;
`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 30%;

  p {
    font-family: Spectral;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #161616;
  }
`;

const Select = styled.select`
  border: 1px solid #E3E3E3;
  box-sizing: border-box;
  border-radius: 9px;
  width: 308.59px;
  height: 45.5px;
  appearance: none;
  background: url(${setaSelect}) no-repeat center right #FFF;
  font-family: Titillium Web;
  font-weight: bold;
  overflow: hidden;
  background-position: 90% center;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #0087E9;
  padding: 7px 200px 7px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default SectionInfo;