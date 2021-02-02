import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
    </Switch>
  );
};

export default Routes;
