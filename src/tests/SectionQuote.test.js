import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Main from '../pages/Main';
import SectionQuote from '../components/SectionQuote';

describe('Check SectionQuote component', () => {
  it('Check container', () => {
    renderWithRouter(<Main />);
    const container = screen.getByTitle('sectionQuote');
    expect(container).toBeInTheDocument();
  });
  it('Check image', () => {
    renderWithRouter(<SectionQuote />);
    const image = screen.getByAltText('imagem de Giovana Santos que faz a citação ao lado');
    expect(image).toBeInTheDocument();
    expect(image.src.split('/')[image.src.split('/').length - 1]).toEqual('unsplash_FcLyt7lW5wg.jpg'); 
  });
  it('Check quote', () => {
    renderWithRouter(<SectionQuote />);
    const paragraphQuote = screen.getAllByTitle('quote');
    const headings = screen.getAllByRole('heading');
    expect(paragraphQuote.length).toEqual(1);
    expect(paragraphQuote[0]).toBeInTheDocument();
    expect(headings.length).toEqual(2);
  });
});