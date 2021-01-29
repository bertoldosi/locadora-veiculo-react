import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Calculadora from '../pages/Home';
import Cadastro from '../pages/Cadastro';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/calculadora" exact component={Calculadora} />
    </Switch>
  );
};

export default Routes;
