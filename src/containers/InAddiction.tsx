import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../components/Button';
import { Quote } from './Quote';
import { RootState } from '../store/rootReducer';
// import { inAddictionChange } from '../store/timers/timersActions';

interface IInAddiction {}
export const InAddiction: React.FC<IInAddiction> = () => {
  // const inAddiction = useSelector(
  //   (state: RootState) => state.timers.inAddiction
  // );
  const dispatch = useDispatch();
  return (
    <>
      <Quote marginBottom="60px" />
      <Button
        onClick={() => {
          // dispatch(inAddictionChange(inAddiction));
        }}
        type="oneWordOneLine"
      >
        Отказаться от алкоголя
      </Button>
    </>
  );
};
