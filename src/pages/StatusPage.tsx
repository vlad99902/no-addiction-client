import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '../components/Container';
import { InAddiction } from '../containers/InAddiction';
import { OutAddiction } from '../containers/OutAddiction';
import { RootState } from '../store/rootReducer';

const StatusPage = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );
  return (
    <Container
      maxWidth="1600px"
      margin="0 auto"
      padding="100px 18px 0px"
      height="calc(100vh - 100px)"
    >
      {inAddiction ? <InAddiction /> : <OutAddiction />}
    </Container>
  );
};

export default React.memo(StatusPage);