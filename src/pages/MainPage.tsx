import React from 'react';

// import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { CountDown } from '../containers/CountDown';

export const MainPage: React.FC = () => {
  return (
    <Container maxWidth="1600px" margin="0 auto" padding="18px 18px 0">
      {/* <Button onClick={() => console.log('пизда')} type="smallText">
        Отказаться от алкоголя
      </Button> */}
      <CountDown />
    </Container>
  );
};
