import React from 'react';
import Footer from '../components/Footer';
import SectionInfo from '../components/SectionInfo';
import SectionInitial from '../components/SectionInitial';
import SectionQuote from '../components/SectionQuote';

const Main = () => {
  return (
    <div>
      <SectionInitial />
      <SectionInfo />
      <SectionQuote />
      <Footer />
    </div>
  );
};

export default Main;
