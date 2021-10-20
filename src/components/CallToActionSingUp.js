import React from 'react';
import styled from 'styled-components';

const CallToActionSingUp = () => {
  return (
    <Container>
      <ContainerCall title="call-to-action">
        <Phrase1 title="Aprendizado traduzido com">Aprendizado traduzido com <span className="span1">excelência.</span></Phrase1>
        <Phrase2 title="Inicie seu semestre em">Inicie seu semestre em <span className="span2">classe</span></Phrase2>
        <button>Inscreva-se já</button>
      </ContainerCall>
      <div className="separator" />
    </Container>
  );
};

const ContainerCall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 157px;
  position: relative;
  margin-top: 120px;
  button {
    width: 162px;
    height: 43px;
    background: linear-gradient(180deg, #00D4E1 0%, #499FEE 100%);
    box-shadow: 0px 4px 11px #BAE7FA, inset 1.7428px 2.6142px 0px rgba(255, 255, 255, 0.25);
    border-radius: 58px;
    border: none;
    font-family: Nunito, sans-serif;
    font-weight: bold;
    font-size: 18.2994px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 3px 12px 3px #BAE7FA,  3.7428px 3px 4px rgba(155, 155, 155, 0.25);
      width: 163px;
      height: 44px;
    }
  }
  @media screen and (max-width: 890px) {
    margin-top: 40px;
  }

`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  .separator {
    width: 350px;
    @media screen and (max-width: 990px) {
      width: 100px;
    }
    @media screen and (max-width: 890px) {
      width: 50px;
    }
    @media screen and (max-width: 690px) {
      display: none;
    }
  }
`;

const Phrase1 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 25px;
  line-height: 21px;
  color: #A4B7D5;
  margin: 0;
  padding: 0;

  .span1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;

const Phrase2 = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 47px;
  line-height: 38px;
  margin: 0;
  padding: 0;
  color: #0087E9;

  .span2 {
    font-family: Kristi;
    font-weight: 400;
    font-size: 73px;

    @media screen and (max-width: 690px) {
    font-size: 67px;
    margin: 0;
    padding: 0;
    }
    @media screen and (max-width: 590px) {
      font-size: 42px;
      margin: 0;
      padding: 0;
    }
    @media screen and (max-width: 490px) {
      font-size: 32px;
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 690px) {
    font-size: 37px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 590px) {
    font-size: 28px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 490px) {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
`;

export default CallToActionSingUp;
