import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from './styles';

const Content: React.FC = () => {
  return (
    <Container>
      <Header>
        <h5>Home</h5>
        <ul>
          <li>
            <Link to="teste">Home</Link>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' stroke='%236c757d' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E"
              alt="seta"
            />
          </li>
        </ul>
        <span>Dashboard</span>
      </Header>

      <h1>Conteudo</h1>
    </Container>
  );
};

export default Content;
