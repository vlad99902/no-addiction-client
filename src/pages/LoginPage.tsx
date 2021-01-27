import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';

import { useDispatch } from 'react-redux';
import { authWithEmail } from '../store/users/usersActions';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';
import { Input } from '../components/Input';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { VisibilityOn } from '../assets/VisibilityOn';
import { VisibilityOff } from '../assets/VisibilityOff';
import { loginOptions, passwordOptions } from '../constants/validationConst';
import { Link } from 'react-router-dom';

interface IForm {
  login: string;
  password: string;
}
interface IInputValidation {
  login?: boolean;
  password?: boolean;
}

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<IForm>({
    login: '',
    password: '',
  });
  const [inputValidation, setInputValidation] = useState<IInputValidation>({
    login: true,
    password: true,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const validationCheck = (e: any) => {
    setInputValidation({
      login: validator.isLength(form.login, loginOptions),
      password: validator.isLength(form.password, { min: 6 }),
    });
  };

  const submitLoginForm = (e: any) => {
    e.preventDefault();

    if (inputValidation.login && inputValidation.password) {
      dispatch(authWithEmail('login', '', form.login, form.password));
      setForm({ login: '', password: '' });
    }

  };

  const changeHandler = (event: any) => {
    setInputValidation({ ...inputValidation, [event.target.name]: true });
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
            <Title fz="64px">Авторизоваться</Title>
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
            <Container
              marginBottom="32px"
              maxWidth="360px"
              margin="0 auto"
              position="relative"
            >
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
                  right: '15px',
                  top: '12px',
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
                onClick={(e) => {
                  validationCheck(e);
                }}
                type="submit"
                form="loginForm"
              >
                Авторизоваться
              </Button>
            </Container>
          </form>

          <Container margin="60px auto 0" style={{ textAlign: 'center' }}>
            <Text>Нет учетной записи NoAddiction?</Text>
            <Link
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: ' 14px',
                margin: '0px auto',
                textAlign: 'center',
              }}
              to="/register"
            >
              Зарегистрироваться
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
