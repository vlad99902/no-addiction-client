import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import styled from 'styled-components';
import validator from 'validator';

import { registerWithEmail } from '../store/users/usersActions';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { VisibilityOn } from '../assets/VisibilityOn';
import { VisibilityOff } from '../assets/VisibilityOff';
import { loginOptions, passwordOptions } from '../constants/validationConst';

interface IForm {
  login: string;
  password: string;
  email: string;
}

interface IInputValidation {
  email: boolean;
  password: boolean;
  login: boolean;
}

export const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    login: '',
    password: '',
    email: '',
  });

  const [inputValidation, setInputValidation] = useState<IInputValidation>({
    password: true,
    email: true,
    login: true,
  });

  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const validationCheck = (e: any) => {
    setInputValidation({
      email: validator.isEmail(form.email),
      password: validator.isStrongPassword(form.password, passwordOptions),
      login: validator.isLength(form.login, loginOptions),
    });
  };

  const submitRegistrationForm = (e: any) => {
    e.preventDefault();
    if (
      inputValidation.email &&
      inputValidation.password &&
      inputValidation.login
    ) {
      console.log(inputValidation.email, 'inputValidation.email');
      console.log(inputValidation.password, 'inputValidation.password');
      // dispatch(registerWithEmail(form.login, form.email, form.password));
      setForm({ login: '', password: '', email: '' });
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
            <Title fz="64px">Зарегистрироваться</Title>
          </Container>
          <form
            onSubmit={(e) => {
              submitRegistrationForm(e);
            }}
            id="registrationForm"
          >
            <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="E-Mail"
                type="text"
                name="email"
                onChange={(e) => changeHandler(e)}
                value={form.email}
                valid={inputValidation.email}
              />
            </Container>
            <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
              <Input
                placeholder="Login"
                type="text"
                name="login"
                onChange={(e) => changeHandler(e)}
                value={form.login}
                valid={inputValidation.login}
              />
            </Container>
            <Container
              marginBottom="16px"
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
                valid={inputValidation.password}
                style={{ paddingRight: '36px' }}
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
                form="registrationForm"
              >
                Зарегистрироваться
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
