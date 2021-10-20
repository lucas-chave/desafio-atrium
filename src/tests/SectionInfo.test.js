import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Main from '../pages/Main';
import SectionInfo from '../components/SectionInfo';

describe('Check section info', () => {
  it('Check if exist', () => {
    renderWithRouter(<Main />);
    const container = screen.getByTitle('sectionInfo');
    expect(container).toBeInTheDocument();
  });
  it('Check title', () => {
    renderWithRouter(<SectionInfo />);
    const title = screen.getByRole('heading', { name: 'Conheça a universidade' });
    expect(title).toBeInTheDocument();
  });
  it('Check texts', () => {
    renderWithRouter(<SectionInfo />);
    const SubTitle = screen.getByRole('heading', { name: 'Trace sua jornada' });
    const SubTitle2 = screen.getByRole('heading', { name: 'Biblioteca Central' });
    const select = screen.getByRole('combobox');
    expect(SubTitle).toBeInTheDocument();
    expect(SubTitle2).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });
  it('Check images', () => {
    renderWithRouter(<SectionInfo />);
    const image1 = screen.getByAltText('imagem de um auditório com pessoas');
    const image2 = screen.getByAltText('imagem de um corredor de uma biblioteca');
    expect(image1).toBeInTheDocument();
    expect(image2).toBeInTheDocument();
    expect(image1.src.split('/')[image1.src.split('/').length - 1]).toBe('unsplash_YRMWVcdyhmI.jpg');
    expect(image2.src.split('/')[image2.src.split('/').length - 1]).toBe('unsplash_ggeZ9oyI-PE.jpg');
  });
});