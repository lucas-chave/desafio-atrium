import React from 'react';
import styled from 'styled-components';

const CallToActionSingUp = () => {
  return (
    <Container>
      <ContainerCall>
        <Phrase1>Aprendizado traduzido com <span className="span1">excelência.</span></Phrase1>
        <Phrase2>Inicie seu semestre em <span className="span2">classe</span></Phrase2>
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
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  .separator {
    width: 350px;
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
  }
`;

export default CallToActionSingUp;
