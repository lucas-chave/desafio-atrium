import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import './css/fonts.css';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
};

export default App;
