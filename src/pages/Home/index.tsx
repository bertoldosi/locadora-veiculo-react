import React from 'react';
import Calculadora from '../../components/Calculadora';
import Resultado from '../../components/Resultado';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Calculadora />
      <Resultado />
    </Container>
  );
};

export default Home;
