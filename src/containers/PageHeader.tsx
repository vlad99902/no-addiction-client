import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { inAddictionChange } from '../store/timers/timersActions';

import { Container } from '../components/Container';
import { Image } from '../components/Image';
import { Title } from '../components/Title';
import { SwitchButton } from '../components/SwitchButton';
import { colors } from '../styles/colors';
import { Button } from '../components/Button';

import logo from '../assets/logoNoAlco.png';
import profileIcon from '../assets/profileIcon.png';
import { scrollToElement } from '../functions/scrollToElement';
import { Link } from 'react-router-dom';

//TODO верстка кирилл
export const PageHeader: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction,
  );

  const dispatch = useDispatch();

  return (
    <div id="#">
      <Content>
        <Container
          maxWidth="1600px"
          margin="0 auto"
          pos="space-between"
          position="relative"
          padding="0 18px"
        >
          <Container style={{}}>
            <Image
              src={logo}
              width="300px"
              onClick={() => {
                scrollToElement('#');
              }}
              cursor="pointer"
            />
          </Container>
          <Container
            position="absolute"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
            pos="space-between"
            maxWidth="600px"
          >
            <Title fz="36px">Сейчас я пью</Title>
            <Container margin="0 0 0 40px">
              <SwitchButton
                position={inAddiction}
                onClick={() => {
                  dispatch(inAddictionChange());
                }}
              />
            </Container>
          </Container>
          <Container pos="end">
            <Button
              styleType="extraSmallText"
              onClick={() => {
                scrollToElement('records');
              }}
            >
              Leaderboard
            </Button>
            <Link to="/noAlco/settings">
              <Image src={profileIcon} width="100px" />
            </Link>
          </Container>
        </Container>
      </Content>
    </div>
  );
};

const Content = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: ${colors.$gray};
  z-index: 11;
`;
