import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../components/Button';
import { Quote } from './Quote';

import { inAddictionChange } from '../store/timers/timersActions';

interface IInAddiction {}
export const InAddiction: React.FC<IInAddiction> = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Quote marginBottom="60px" />
      <Button
        onClick={() => {
          dispatch(inAddictionChange());
        }}
        type="oneWordOneLine"
      >
        Отказаться от алкоголя
      </Button>
    </>
  );
};
