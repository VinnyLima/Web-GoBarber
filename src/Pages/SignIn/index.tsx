import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../Assets/svg/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="" />
        <form action="">
          <h1>Faça seu Logon</h1>
          <Input name="email" placeholder="E-mail" />

          <Input name="password" placeholder="Senha" />

          <Button>Entrar</Button>

          <a href="forgot">Esqueci minha Senha</a>
        </form>
        <a href="">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
