import React from 'react';
import styled from 'styled-components';
import imageBackground from '../images/backgroundImageSectionInitial.jpg';
import CallToActionSingUp from './CallToActionSingUp';
import Header from './Header';

const SectionInitial = () => {
  return (
    <div>
      <Image src={ imageBackground } alt="imagem de um casal" />
      <Header />
      <CallToActionSingUp />
    </div>
  );
};

const Image = styled.img`
  width: 100%;
  height: 135%;
  top: 0;
  position: absolute;
`;

export default SectionInitial;
