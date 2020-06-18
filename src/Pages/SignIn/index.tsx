/***
 * IMPORTAÇÕES GLOBAIS
 */
import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import { Form } from '@unform/web';

/**
 *  IMPORTAÇÕES LOCAIS
 */
import logoImg from '../../Assets/svg/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';



const SignIn: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (

    <>
      <Container>
        <Content>
          <img src={logoImg} alt="" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu Logon</h1>
            <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button>Entrar</Button>

            <a href="forgot">Esqueci minha Senha</a>
          </Form>
          <a href="">
            <FiLogIn />
          Criar Conta
        </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
