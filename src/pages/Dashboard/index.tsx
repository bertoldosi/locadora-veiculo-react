import React from 'react';
import { AiOutlineUser, AiFillCar } from 'react-icons/ai';
import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const menu = [
    {
      iconeMenu: <AiOutlineUser size={20} />,
      nomeMenu: 'Cliente',
      link: '/cadastroCliente',
      nomeLink: 'Cadastrar',
    },

    {
      iconeMenu: <AiFillCar size={20} />,
      nomeMenu: 'Cliente',
      link: '/cadastroCliente',
      nomeLink: 'Cadastrar',
    },
  ];
  return (
    <Container>
      <Sidebar nomePagina="Dashboard" menu={menu} />
      <Main />
    </Container>
  );
};

export default Dashboard;
