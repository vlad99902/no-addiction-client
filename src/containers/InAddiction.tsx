import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../components/Button';
import { Quote } from './Quote';
import { RootState } from '../store/rootReducer';
import {
  getRandomBadQuote,
  inAddictionChange,
} from '../store/timers/timersActions';

interface IInAddiction {}
export const InAddiction: React.FC<IInAddiction> = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );
  const quote = useSelector((state: RootState) => state.timers.quote);
  const dispatch = useDispatch();
  return (
    <>
      <Quote author={quote.author} marginBottom="60px">
        {quote.quote}
      </Quote>
      <Button
        onClick={() => {
          dispatch(getRandomBadQuote());
        }}
        type="oneWordOneLine"
      >
        Цитата
      </Button>
      <Button
        onClick={() => {
          dispatch(inAddictionChange(inAddiction));
        }}
        type="oneWordOneLine"
      >
        Отказаться от алкоголя
      </Button>
    </>
  );
};
