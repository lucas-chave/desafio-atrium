import React from 'react';
import styled from 'styled-components';
import imageBackground from '../images/backgroundImageSectionInitial.jpg';
import CallToActionSingUp from './CallToActionSingUp';
import Header from './Header';
import NavigationSection from './NavigationSection';

const SectionInitial = () => {
  return (
    <Container>
      {/* <Image src={ imageBackground } alt="imagem de um casal" /> */}
      <Header />
      <CallToActionSingUp />
      <NavigationSection />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${imageBackground});
`;

const Image = styled.img`
  width: 100%;
  height: 135%;
  top: 0;
  position: absolute;
`;

export default SectionInitial;
