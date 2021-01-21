import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { clearCurrentTimer } from '../store/timers/timersActions';
import { CountDown } from './CountDown';
import { Quote } from './Quote';

export const OutAddiction: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CountDown />
      <Container margin="0 auto" pos="center">
        <Button onClick={() => dispatch(clearCurrentTimer())} type="main">
          выпил
        </Button>
      </Container>
      <Quote marginTop="60px" />
    </Container>
  );
};
