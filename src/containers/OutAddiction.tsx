import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { clearCurrentTimer } from '../store/timers/timersActions';

import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { CountDown } from './CountDown';
import { Quote } from './Quote';
import { Modal } from './Modal';
import { useHistory } from 'react-router-dom';
import { ConfirmWindow } from '../components/ConfirmWindow';

export const OutAddiction: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
      <Modal
        setIsOpened={() => setIsOpened(false)}
        isOpened={isOpened}
        padding="30px"
      >
        <ConfirmWindow
          mainAction={() => {
            dispatch(clearCurrentTimer());
            setTimeout(() => setIsOpened(false), 200);
          }}
          secondAction={() => setIsOpened(false)}
        />
      </Modal>
      <CountDown />
      <Container margin="0 auto" pos="center">
        {/* <Button onClick={() => dispatch(clearCurrentTimer())} styleType="main"> */}
        <Button onClick={() => setIsOpened(true)} styleType="main">
          выпил
        </Button>
      </Container>
      <Quote marginTop="60px" />
    </>
  );
};
