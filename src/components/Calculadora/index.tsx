import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { soma, subtracao } from '../../store/Calcular/calcular.actions';

import { Container } from './styles';

const Caculadora: React.FC = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();

  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <input
          value={a}
          onChange={(e) => setA(Number(e.target.value))}
          type="number"
        />
        <input
          value={b}
          onChange={(e) => setB(Number(e.target.value))}
          type="number"
        />
      </div>

      <div>
        <button type="submit" onClick={() => dispatch(soma(a, b))}>
          Somar
        </button>
        <button type="submit" onClick={() => dispatch(subtracao(a, b))}>
          Subtrair
        </button>
      </div>
    </Container>
  );
};

export default Caculadora;
