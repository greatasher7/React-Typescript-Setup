import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';

const Router = () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};

export default Router;
