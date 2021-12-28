import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect path="*" to="/" />
    </Switch>
  );
};

export default Router;
