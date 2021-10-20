import React from 'react';
import styled from 'styled-components';
import imageQuote from '../images/unsplash_FcLyt7lW5wg.jpg';
import setaButton from '../images/seta-button.svg';
import setaLeft from '../images/seta-button-left.svg';

const SectionQuote = () => {
  return (
    <Container>
      <SubContainer>
        <img src={imageQuote} alt="imagem de Giovana Santos que faz a citação ao lado" />
        <ContainerText>
          <p>
            “As aulas não são apenas teóricas. Nós começamos com teoria mas logo em seguida colocamos
            a mão na massa. Essa experiência é muito boa para estágios e para a vida profissional em geral.
            Na minha universidade anterior nós tínhamos bom material teórico mas não éramos ensinado esse conteúdo de maneira prática.”
          </p>
          <h4>Giovana Santos</h4>
          <h5>Bacharel em Ciência da Computação</h5>
        </ContainerText>
      </SubContainer>
      <Buttons>
        <button><img src={ setaButton } alt="Icone de botão" /></button>
        <button><img src={ setaLeft } alt="Icone de botão" /></button>
      </Buttons>
    </Container>    
  );
}

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  button {
    border: none;
    background: #0087E9;
    width: 86px;
    height: 63px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, #DAF4FF 0%, #F8FDFF 100%);
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 590px) {
    flex-wrap: wrap;    
  }
  img {
    margin-top: -80px;
    width: 380px;

    @media screen and (max-width: 1310px) {
      width: 360px;
    }

    @media screen and (max-width: 1080px) {
      margin-top: -10px;
    }
    @media screen and (max-width: 960px) {
      margin-top: 10px;
    }
    @media screen and (max-width: 590px) {
      margin: 0 10px;
      width: 260px;
    }
    @media screen and (max-width: 440px) {
      margin-top: 10px;
      width: 200px;
    }
  }
`;

const ContainerText = styled.div`
  width: 40%;

  p {
    font-family: Kotta One;
    font-weight: normal;
    font-size: 26px;
    line-height: 43px;
    color: #117AC0;
    margin: 0;

    @media screen and (max-width: 1080px) {
      font-size: 22px;
      line-height: 38px;
    }
    @media screen and (max-width: 790px) {
      font-size: 18px;
      line-height: 34px;
    }
    @media screen and (max-width: 590px) {
      margin: 30px 0 0 0;
      font-size: 16px;
      line-height: 24px;
    }
    @media screen and (max-width: 440px) {
      width: 270px;
    }
  }
  h4 {
    margin: 0;
    font-family: Spectral;
    font-weight: normal;
    font-size: 33px;
    line-height: 51px;
    color: #0067AC;
    &::after {
      content: '';
      display: block;
      width: 220px;
      height: 30px;
      border: solid 9px #000;
      border-color: transparent transparent #01DDE9 transparent;
      border-radius: 50px 10px 160px 80%/35px;
      margin: -40px 0 0 -16px;

      @media screen and (max-width: 620px) {
        width: 150px;
        border: solid 4px #000;
        border-color: transparent transparent #01DDE9 transparent;
        border-radius: 50px 10px 160px 80%/35px;
        margin: -30px 0 0 -10px;
      }
    }
    @media screen and (max-width: 620px) {
      font-size: 22px;
      line-height: 24px;
    }
  }
  h5 {
    margin: 0;
    font-family: Spectral;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #0067AC;
    @media screen and (max-width: 620px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
  @media screen and (max-width: 440px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
  }
`;

export default SectionQuote;
