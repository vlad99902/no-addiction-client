import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Container } from '../components/Container';
import { CountDown } from '../containers/CountDown';
import { InAddiction } from '../containers/InAddiction';
import { Title } from '../components/Title';
import { Quote } from '../containers/Quote';

import { Button } from '../components/Button';
import { userSetLoader } from '../store/users/usersActions';

export const MainPage: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );
  const loading = useSelector((state: RootState) => state.users.loading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   inAddiction
  //     ? dispatch(getRandomBadQuote())
  //     : dispatch(getRandomGoodQuote());
  // }, [inAddiction]);

  return (
    <Container
      maxWidth="1600px"
      margin="100px auto 0px"
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
          <Quote marginBottom="60px" marginTop="60px" />
          <Button
            onClick={() => {
              dispatch(userSetLoader({ main: true }));
            }}
          >
            on true
          </Button>
          <Button
            onClick={() => {
              dispatch(userSetLoader({ component: false }));
            }}
          >
            on false
          </Button>
        </>
      )}
    </Container>
  );
};
