import React from 'react';
import styled from 'styled-components';
import imageQuote from '../images/unsplash_FcLyt7lW5wg.jpg';

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
    </Container>    
  );
}

const Container = styled.div`
  display: flex;
  background: linear-gradient(180deg, #DAF4FF 0%, #F8FDFF 100%);
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  img {
    margin-top: -50px;
  }
`;

const ContainerText = styled.div`
  width: 35%;

  p {
    font-family: Kotta One;
    font-weight: normal;
    font-size: 26px;
    line-height: 43px;
    color: #117AC0;
    margin: 0;
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
    }
  }
  h5 {
    margin: 0;
    font-family: Spectral;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #0067AC;

  }
`;

export default SectionQuote;