import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import styled from 'styled-components';
import validator from 'validator';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';
import { Input } from '../components/Input';
import { VisibilityOn } from '../assets/VisibilityOn';
import { VisibilityOff } from '../assets/VisibilityOff';

interface IForm {
  login?: string;
  password?: string;
}
interface IInputValidation {
  login?: boolean;
  password?: boolean;
}

export const LoginPage: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    login: '',
    password: '',
  });
  const [inputValidation, setInputValidation] = useState<IInputValidation>({
    login: true,
    password: true,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const submitLoginForm = (e: any) => {
    e.preventDefault();
    if (form.login && form.password) {
      setInputValidation({
        login: validator.isEmail(form.login),
        password: validator.isStrongPassword(form.password),
      });
      console.log(form);
      if (inputValidation.login && inputValidation.password)
        setForm({ login: '', password: '' });
    } else console.log('Заполните все поля');
  };

  const changeHandler = (event: any) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const changeVisible = (e: any) => {
    setVisible((pre) => !pre);
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
          <Container marginBottom="32px" margin="0 auto">
            <Title fz="64px">Войти</Title>
          </Container>
          <form onSubmit={(e) => submitLoginForm(e)} id="loginForm">
            <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="E-Mail or Login"
                type="text"
                name="login"
                onChange={(e) => changeHandler(e)}
                value={form.login}
                valid={inputValidation.login}
              />
            </Container>
            <Container marginBottom="32px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="Password"
                type={visible ? 'text' : 'password'}
                name="password"
                onChange={(e) => changeHandler(e)}
                value={form.password}
                style={{ paddingRight: '36px' }}
                valid={inputValidation.password}
              />
              <Container
                width="22px"
                style={{
                  position: 'absolute',
                  margin: '-34px 0px 0px 238px',
                  userSelect: 'none',
                }}
                onClick={changeVisible}
              >
                {visible ? <VisibilityOn /> : <VisibilityOff />}
              </Container>
            </Container>
            <Container pos="center">
              <Button
                styleType="extraSmallText"
                onClick={() => {}}
                type="submit"
                form="loginForm"
              >
                Войти
              </Button>
            </Container>
          </form>

          <Container margin="60px auto 0" style={{ textAlign: 'center' }}>
            <Text>Нет учетной записи NoAddiction?</Text>
            <a
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: ' 14px',
                margin: '0px auto',
                textAlign: 'center',
              }}
              href="http://localhost:3001/register"
            >
              Зарегистрироваться
            </a>
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
