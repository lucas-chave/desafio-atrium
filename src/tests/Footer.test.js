import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Main from '../pages/Main';
import Footer from '../components/Footer';

describe('Check Footer', () => {
  it('Check container', () => {
    renderWithRouter(<Main />);
    const footerContainer = screen.getByTitle('footer');
    expect(footerContainer).toBeInTheDocument();
  });
  it('Check items footer', () => {
    renderWithRouter(<Footer />);
    const footerContainer = screen.getByRole('contentinfo');
    const lists = screen.getAllByRole('list');
    expect(footerContainer).toBeInTheDocument();
    expect(lists.length).toEqual(5);
    
  });
});