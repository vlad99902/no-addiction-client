import React, { HTMLAttributes } from 'react';
import { Container } from './Container';

import profileIcon from '../assets/profileIcon.png';
import { Image } from './Image';
import { Title } from './Title';
import { SecondButton } from './SecondButton';
import { colors } from '../styles/colors';
import { useDispatch } from 'react-redux';
import { clearAuthSession } from '../store/users/usersActions';

export const UserInfo: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...rest
}) => {
  const dispatch = useDispatch();
  return (
    <Container pos="space-between" {...rest}>
      <Image src={profileIcon} width="50px" borderRadius="100%" />
      <Container margin="0 0 0 12px">
        <Title ff="Alegreya Sans" fz="28px">
          Vlad99902
        </Title>
        <Title ff="Alegreya Sans" fz="18px" color={colors.$gray}>
          legkovv@mail.ru
        </Title>
      </Container>

      <Container style={{ alignSelf: 'flex-end' }} margin="0 0 0 34px">
        <SecondButton design="normal">Change password</SecondButton>
      </Container>
      <Container style={{ alignSelf: 'flex-end' }} margin="0 0 0 12px">
        <SecondButton
          design="negative"
          onClick={() => dispatch(clearAuthSession())}
        >
          Log Out
        </SecondButton>
      </Container>
    </Container>
  );
};
