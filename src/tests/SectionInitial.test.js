import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Main from '../pages/Main';
import NavigationHeader from '../components/NavigationHeader';
import SectionInitial from '../components/SectionInitial';
import CallToActionSingUp from '../components/CallToActionSingUp';
import NavigationSection from '../components/NavigationSection';

describe('check section initial', () => {
  it('check for a bar at the top of the page', () => {
    renderWithRouter(<Main />);
    const barTop = screen.getByTitle('bar-top');
    expect(barTop).toBeInTheDocument();
  })

  it('Check the page logo in the menu', () => {
    renderWithRouter(<Main />);
    const logo = screen.getByAltText('logo atrium');
    expect(logo).toBeInTheDocument();
  });

  it('Check the menu', () => {
    renderWithRouter(<Main />);
    const menu = screen.getByTitle('menu-header');
    expect(menu).toBeInTheDocument();
  });
  it('Check menu items', () => {
    renderWithRouter(<NavigationHeader />);
    const listFiveElement = screen.getAllByRole('listitem');
    const education = screen.getByText('Educação');
    const search = screen.getByText('Pesquisa');
    const students = screen.getByText('Alunos');
    const admission = screen.getByText('Admissão');
    const searchIcon = screen.getByAltText('icone de pesquisa do menu');
    expect(listFiveElement.length).toBe(5);
    expect(education).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(students).toBeInTheDocument();
    expect(admission).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it('Check the CallToActionSignUp component', () => {
    renderWithRouter(<SectionInitial />)
    const componentCall = screen.getByTitle('call-to-action');
    expect(componentCall).toBeInTheDocument();
  });
  it('Check the CallToActionSignUp component items', () => {
    renderWithRouter(<CallToActionSingUp />)
    const button = screen.getByText('Inscreva-se já');
    const phrase1 = screen.getByTitle('Aprendizado traduzido com');
    const phrase2 = screen.getByTitle('Inicie seu semestre em');
    expect(button).toBeInTheDocument();
    expect(phrase1).toBeInTheDocument();
    expect(phrase2).toBeInTheDocument()
  });

  it('Check navigation menu', () => {
    renderWithRouter(<SectionInitial />);
    const containerNavigation = screen.getByTitle('sectionNavigation');
    expect(containerNavigation).toBeInTheDocument();
  });
  it('Check items navigation menu', () => {
    renderWithRouter(<NavigationSection />);
    const list = screen.getByRole('list');
    const listItem = screen.getAllByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(listItem.length).toBe(3);
  });
});