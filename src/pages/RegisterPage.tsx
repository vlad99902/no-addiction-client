import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import styled from 'styled-components';
import { colors } from '../styles/colors';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';

interface IForm {
  login?: string;
  password?: string;
  eMail?: string;
}

export const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    login: '',
    password: '',
    eMail: '',
  });

  const submitRegistrationForm = (e: any) => {
    console.log(form);
    e.preventDefault();
    setForm({ login: '', password: '', eMail: '' });
  };

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Container
        pos="center"
        height="100%"
        maxWidth="1600px"
        padding="64px 16px"
        margin="0 auto"
        position="relative"
      >
        <Container position="absolute" style={{ top: '16px', right: '16px' }}>
          <LoginGoogleButton>
            <Image src={GoogleIcon} alt="" width="14px" margin="0 16px 0 0" />
            Login with Google
          </LoginGoogleButton>
        </Container>
        <Container>
          <Container marginBottom="32px" margin="0 auto" width="600px">
            <Title fz="64px">Регистрация</Title>
          </Container>
          <form
            onSubmit={(e) => submitRegistrationForm(e)}
            id="registrationForm"
          >
            <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="E-Mail"
                type="email"
                name="eMail"
                onChange={(e) => changeHandler(e)}
                value={form.eMail}
              />
            </Container>
            <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="Login"
                type="text"
                name="login"
                onChange={(e) => changeHandler(e)}
                value={form.login}
              />
            </Container>
            <Container marginBottom="32px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => changeHandler(e)}
                value={form.password}
              />
            </Container>

            <Container pos="center">
              <Button
                styleType="extraSmallText"
                onClick={() => {}}
                form="registrationForm"
              >
                Регистрация
              </Button>
            </Container>
          </form>
          <Container margin="60px auto 0" style={{ textAlign: 'center' }}>
            <Text>Есть учетная запись NoAddiction?</Text>
            <Link
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: ' 14px',
                margin: '0px auto',
                textAlign: 'center',
              }}
              to="http://localhost:3001/login"
            >
              Войти
            </Link>
          </Container>
        </Container>
      </Container>
    </>
  );
};

const LoginGoogleButton = styled.button`
  background-color: #df6961;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
  display: flex;
`;

const Text = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0px auto 0px;
  text-align: center;
  color: #616161;
`;
