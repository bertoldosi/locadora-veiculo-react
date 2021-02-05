import React, { useCallback, useRef } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { Container, Card } from './styles';

import Input from '../../components/Input';

import LogoDark from '../../assets/logo-dark.svg';
import Button from '../../components/Button';
import { Login as Logon } from '../../utils/auth';

interface Errors {
  [key: string]: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = useCallback(async (data) => {
    try {
      // limpando error de formulario
      formRef.current?.setErrors({});

      // valida dados passados pelo formulario
      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Digite um email válido')
          .required('Campo obrigatório'),
        senha: yup.string().min(8, 'No mínimo 8 carateres'),
      });

      // passando dados informado pelo input para valida
      await schema.validate(data, {
        abortEarly: false,
      });

      // realizar o login
      const x = Logon(data.email, data.senha);
      if (x == true) {
        addToast('Login foi realizado com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });

        setTimeout(() => {
          history.push('/dashboard');
        }, 2000);
      } else {
        addToast('Login ou senha incorreto! Verefique suas credenciais.', {
          appearance: 'error',
          autoDismiss: true,
        });
      }

      /* */
    } catch (err) {
      /* */
      if (err instanceof yup.ValidationError) {
        const errorMessages: Errors = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current?.setErrors(errorMessages);
      }
    }
  }, []);

  return (
    <Container>
      <Card>
        <img src={LogoDark} alt="logo" />
        <h4>Login</h4>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
          <Input
            name="senha"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <Button type="submit">Entrar</Button>
        </Form>

        <p>
          Não possui uma conta? <Link to="/cadastro">Cadastro</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Login;
