import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { Container } from '../components/Container';

import { inAddictionChange } from '../store/timers/timersActions';
import { Quote } from './Quote';

interface IInAddiction {}
export const InAddiction: React.FC<IInAddiction> = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Quote marginBottom="60px" />
      <Container margin="0 auto" pos="center">
        <Button
          onClick={() => {
            dispatch(inAddictionChange());
          }}
          styleType="oneWordOneLine"
        >
          Отказаться от алкоголя
        </Button>
      </Container>
    </Container>
  );
};
