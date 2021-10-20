import React from 'react';
import styled from 'styled-components';
import image1 from '../images/unsplash_YRMWVcdyhmI.jpg';
import image2 from '../images/unsplash_ggeZ9oyI-PE.jpg';
import setaSelect from '../images/setaSelect.svg';
import setaButton from '../images/setaDropdown.svg';

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
          <ButtonAccess>ACESSAR<img src={setaButton} alt="icone" /></ButtonAccess>
        </ContainerTexts>
        <img className="image2" src={ image2 } alt="imagem de um auditório" />
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  display: block;
  flex-direction: column;
  margin-top: -125px;
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
  @media screen and (max-width: 665px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  .image2 {
    @media screen and (max-width: 1310px) {
      width: 650px;
    }
    @media screen and (max-width: 1100px) {
      width: 520px;
    }
  @media screen and (max-width: 905px) {
    width: 410px;
  }
  @media screen and (max-width: 805px) {
    width: 310px;
    }
  }

  @media screen and (max-width: 1040px) {
    img {
      width: 520px;
    }
  }
  @media screen and (max-width: 905px) {
    img {
      width: 400px;
    }
  }
  @media screen and (max-width: 805px) {
    img {
      width: 300px;
    }
  }
`;

const SubTitle = styled.h4`
  font-family: Spectral;
  font-style: normal;
  font-weight: normal;
  font-size: 43px;
  line-height: 45px;
  color: #0087E9;
  margin: 0;
  @media screen and (max-width: 1040px) {
    font-size: 36px;
    line-height: 40px;
  }
  @media screen and (max-width: 905px) {
    font-size: 34px;
    line-height: 38px;
  }
  @media screen and (max-width: 805px) {
    font-size: 28px;
    line-height: 32px;
  }

`;

const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 45%;
  padding: 30px;
  p {
    font-family: Spectral;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #161616;
    @media screen and (max-width: 805px) {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

const Select = styled.select`
  border: 1px solid #E3E3E3;
  border-radius: 9px;
  width: 308.59px;
  height: 45.5px;
  appearance: none;
  background: url(${setaSelect}) no-repeat center right #FFF;
  font-family: Titillium Web;
  font-weight: bold;
  background-position: 90% center;
  font-size: 18px;
  line-height: 30px;
  text-transform: uppercase;
  color: #0087E9;
  padding: 7px 10px 7px 10px;
  -webkit-appearance: none;
  -moz-appearance: none;

  @media screen and (max-width: 805px) {
    width: 240px;
    height: 38px;
    padding: 0 10px 0 10px;
  }
`;

const ButtonAccess = styled.button`
  border: 1px solid #E3E3E3;
  border-radius: 9px;
  width: 308.59px;
  height: 45.5px;
  font-family: Titillium Web;
  font-weight: bold;
  background-position: 90% center;
  font-size: 18px;
  line-height: 30px;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0087E9;
  padding: 0 30px 0 15px;
  cursor: pointer;
  img {
    width: 11px;
  }
  @media screen and (max-width: 805px) {
    width: 240px;
    height: 38px;
    padding: 0 10px 0 10px;
  }
`;

export default SectionInfo;