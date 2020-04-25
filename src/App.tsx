import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Reset from './styles/Reset';

const App: React.FC = () => (
  <>
    <Reset />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
