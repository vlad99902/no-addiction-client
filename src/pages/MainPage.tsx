import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';
import { CountDown } from '../containers/CountDown';

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );

  return (
    <Container
      maxWidth="1600px"
      margin="100px auto 0px"
      // pos="center"
      padding="18px 18px 0px"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      height="calc(100% - 100px)"
    >
      {inAddiction ? <InAddiction /> : <CountDown />}
    </Container>
  );
};
