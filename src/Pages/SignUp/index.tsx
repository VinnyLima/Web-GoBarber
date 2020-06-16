import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';
import logoImg from '../../Assets/svg/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input icon={FiUser} name="name" placeholder="Seu Nome" />

            <Input
              icon={FiMail}
              name="email"
              type="email"
              placeholder="E-mail"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button>Cadastrar</Button>
          </Form>
          <a href="">
            <FiArrowLeft />
            Voltar para Logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
