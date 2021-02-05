import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import RoutePrivate from './route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      <RoutePrivate path="/dashboard" exact component={Dashboard} isPrivate />
      <RoutePrivate path="/garagem" exact component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
