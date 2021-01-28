import React from 'react';

import { Container, Card } from './styles';

import LogoDark from '../../assets/logo-dark.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={LogoDark} alt="logo" />
        <h4>Signin</h4>

        <form>
          <div>
            <span>Logo</span>
            <input type="text" />
          </div>

          <div>
            <span>Logo</span>
            <input type="text" />
          </div>
        </form>

        <div>
          <input type="checkbox" name="" id="" />
          <label>Save credentials</label>
        </div>

        <button>Signin</button>

        <p>
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
