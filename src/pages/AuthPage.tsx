import React from 'react';
import { Container } from '../components/Container';
import { Title } from '../components/Title';

import styled from 'styled-components';
import { colors } from '../styles/colors';

import { Button } from '../components/Button';
import { Image } from '../components/Image';
import GoogleIcon from '../assets/GoogleIcon.png';

export const AuthPage: React.FC = () => {
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
          <Container marginBottom="16px" maxWidth="360px" margin="0 auto">
            <Input placeholder="Login" />
          </Container>
          <Container marginBottom="32px" maxWidth="360px" margin="0 auto">
            <Input placeholder="Password" />
          </Container>
          <Container pos="center">
            <Button type="extraSmallText" onClick={() => {}}>
              Регистрация
            </Button>
          </Container>
        </Container>
      </Container>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 12px 16px;
  border: 2px solid ${colors.$gray};
  border-radius: 16px;
  outline: none;

  color: ${colors.$black};
  :focus {
    border: 2px solid ${colors.$black};
  }
  ::placeholder {
    font-weight: 400;
    color: ${colors.$gray};
  }
`;

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
