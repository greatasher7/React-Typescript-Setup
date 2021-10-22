import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages/Routes';
import Globalstyle from './Styles/Globalstyle';
import GlobalFont from './Styles/GlobalFont';

function App(): JSX.Element {
  return (
    <>
      <Globalstyle />
      <GlobalFont />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
