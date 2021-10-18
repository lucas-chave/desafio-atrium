import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Main } />
    </BrowserRouter>
  );
}

export default App;
