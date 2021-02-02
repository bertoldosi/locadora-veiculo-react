import React, { useCallback, useRef } from 'react';
import * as yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiMail, FiLock, FiUser, FiUnlock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Card } from './styles';

import Input from '../../components/Input';

import LogoDark from '../../assets/logo-dark.svg';
import Button from '../../components/Button';

interface Errors {
  [key: string]: string;
}

const Cadastro: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      // limpando error de formulario
      formRef.current?.setErrors({});

      // valida dados passados pelo formulario
      const schema = yup.object().shape({
        nome: yup.string().required('Campo obrigatório'),
        email: yup
          .string()
          .email('Digite um email válido')
          .required('Campo obrigatório'),
        senha: yup.string().min(8, 'No mínimo 8 carateres'),
        comfirma_senha: yup
          .string()
          .required('Campo obrigatório')
          .oneOf([yup.ref('senha'), null], 'Senha não confere'),
      });

      // passando dados informado pelo input para valida
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
      /* */
    } catch (err) {
      console.log(err);
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
        <h4>Cadastro</h4>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="senha" icon={FiLock} placeholder="Senha" />
          <Input
            name="comfirma_senha"
            icon={FiUnlock}
            placeholder="Comfirma sua senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <p>
          Já possui uma conta? <Link to="/">Login</Link>
        </p>
      </Card>
    </Container>
  );
};

export default Cadastro;
