import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

import { Container, Header, Menu } from './styles';

interface PropsMenu {
  iconeMenu: React.Component;
  nomeMenu: string;
  link: string;
  nomeLink: string;
}

interface PropsSidebar {
  nomePagina: string;
  menu: Record<string, any>;
}

const Sidebar: React.FC<PropsSidebar> = ({ nomePagina, menu }) => {
  const [toHide, setToHide] = useState(false);

  const handlerToHide = () => setToHide(!toHide);

  return (
    <Container>
      <Header>
        <span>LOCADORA</span>
      </Header>

      <Menu toHide={toHide}>
        <h2>Navegação</h2>

        <div>
          <div className="title">
            <AiOutlineHome size={20} />
            <span>{nomePagina}</span>
          </div>

          {menu.map((item: any) => {
            return (
              <div className="content" onClick={handlerToHide}>
                <div className="content-header">
                  {item.iconeMenu}
                  <span>{item.nomeMenu}</span>
                </div>

                <ul>
                  <Link to="link">{item.nomeLink}</Link>
                </ul>
              </div>
            );
          })}
        </div>
      </Menu>
    </Container>
  );
};

export default Sidebar;
