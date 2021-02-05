import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineLogout } from 'react-icons/ai';
import imgProfile from '../../assets/profile.jpeg';
import { Logout } from '../../utils/auth';

import { Container, Search, Profile, ToHider } from './styles';

const Header: React.FC = () => {
  const [toHide, setToHide] = useState(false);

  const handlerToHide = () => setToHide(!toHide);
  return (
    <>
      <Container>
        <Search>
          <AiOutlineSearch size={24} />
        </Search>

        <Profile onClick={handlerToHide}>
          <div>
            <img src={imgProfile} alt="profile" />
            <div>
              <h2>Matheus Bertoldo</h2>
              <span>Administrador</span>
            </div>
          </div>
        </Profile>
      </Container>
      <ToHider toHide={toHide} className="toHide">
        <header>
          <div onClick={handlerToHide}>X</div>
        </header>

        <div>
          <span>Deslogar</span>
          <AiOutlineLogout onClick={Logout} size={20} />
        </div>
      </ToHider>
    </>
  );
};

export default Header;
