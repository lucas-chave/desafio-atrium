import React from 'react';
import SectionInfo from '../components/SectionInfo';
import SectionInitial from '../components/SectionInitial';
import SectionQuote from '../components/SectionQuote';

const Main = () => {
  return (
    <div>
      <SectionInitial />
      <SectionInfo />
      <SectionQuote />
    </div>
  );
};

export default Main;
