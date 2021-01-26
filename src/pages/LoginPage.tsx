import React from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import styled from 'styled-components';
import { colors } from '../styles/colors';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';
import { Input } from '../components/Input';

export const LoginPage: React.FC = () => {
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
          <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
            <Input
              placeholder="Login"
              type="text"
              styleProps={{ width: '100%' }}
            />
          </Container>
          <Container marginBottom="32px" maxWidth="360px" margin="0 auto">
            <Input
              placeholder="Password"
              type="text"
              styleProps={{ width: '100%' }}
            />
          </Container>
          <Container pos="center">
            <Button type="extraSmallText" onClick={() => {}}>
              Войти
            </Button>
          </Container>
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
