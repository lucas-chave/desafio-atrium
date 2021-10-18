import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
};

export default App;
