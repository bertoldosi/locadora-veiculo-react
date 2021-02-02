import React from 'react';

import { FiMail, FiLock, FiUser, FiUnlock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';

import Input from '../../components/Input';

import LogoDark from '../../assets/logo-dark.svg';
import Button from '../../components/Button';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={LogoDark} alt="logo" />
        <h4>Cadastro</h4>

        <form>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="senha" icon={FiLock} placeholder="Senha" />
          <Input name="comfirma-senha" icon={FiUnlock} placeholder="Comfirma sua senha" />
          <Button type="submit">Cadastrar</Button>
        </form>

        <p>
          Já possui um conta? <Link to="/">Login</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Cadastro;
