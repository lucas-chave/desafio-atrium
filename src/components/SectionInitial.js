import React from 'react';
import styled from 'styled-components';
import imageBackground from '../images/backgroundImageSectionInitial.jpg';
import CallToActionSingUp from './CallToActionSingUp';
import Header from './Header';
import NavigationSection from './NavigationSection';

const SectionInitial = () => {
  return (
    <Container>
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
  background-size: 100% 100%;
`;

export default SectionInitial;
