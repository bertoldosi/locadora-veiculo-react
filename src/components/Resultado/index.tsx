import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import { Container } from './styles';

const Resultado: React.FC = () => {
  const resultado = useSelector((state: RootStateOrAny) => state.calcular);
  return (
    <Container>
      <h1>Resultado</h1>
      <span>{resultado}</span>
    </Container>
  );
};

export default Resultado;
