import React from 'react';
import { AiFillCar, AiOutlineUser } from 'react-icons/ai';
import Garagem from '../../components/Garagem';
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
      <Garagem />
    </Container>
  );
};

export default Dashboard;
