import React from 'react';
import Content from '../Content';
import Header from '../Header';

import { Container } from './styles';

const Garagem: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
};

export default Garagem;
