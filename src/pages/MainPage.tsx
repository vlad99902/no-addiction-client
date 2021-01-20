import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { CountDown } from '../containers/CountDown';
import { InAddiction } from '../containers/InAddiction';
import { Title } from '../components/Title';
import {
  getRandomBadQuote,
  getRandomGoodQuote,
} from '../store/timers/timersActions';

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );
  const dispatch = useDispatch();
  inAddiction ? dispatch(getRandomBadQuote()) : dispatch(getRandomGoodQuote());

  return (
    <Container
      maxWidth="1600px"
      margin="200px auto 0px"
      pos="center"
      padding="18px 18px 0px"
      style={{ flexDirection: 'column' }}
    >
      {inAddiction ? (
        <>
          <InAddiction />
        </>
      ) : (
        <>
          <Title mb="60px" fz="96px">
            я не пью уже
          </Title>
          <CountDown />
        </>
      )}
    </Container>
  );
};
