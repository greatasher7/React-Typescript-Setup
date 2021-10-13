import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/Routes';
import Globalstyle from './Styles/Globalstyle';

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
