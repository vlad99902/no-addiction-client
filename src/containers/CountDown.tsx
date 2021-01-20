import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { inAddictionChange } from '../store/timers/timersActions';

import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { TimerView } from '../containers/TimerView';
import { Container } from '../components/Container';

type DurationInType =
  | 'years'
  | 'months'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';

export const CountDown: React.FC = () => {
  const dispatch = useDispatch();
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction,
  );

  const [currentTime] = useState(
    useSelector((state: RootState) => state.timers.currentTimer.begin_date),
  );

  const [startDate] = useState(moment(moment(currentTime.slice(0, -1))));

  const [duration, setDuration] = useState(+moment() - +startDate);

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    const interval = setInterval(
      () => setDuration(+moment() - +startDate),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  const durationIn = (type: DurationInType): number => {
    switch (type) {
      case 'years':
        return moment.duration(duration).years();
      case 'months':
        return moment.duration(duration).months();
      case 'days':
        return moment.duration(duration).days();
      case 'hours':
        return moment.duration(duration).hours();
      case 'minutes':
        return moment.duration(duration).minutes();
      case 'seconds':
        return moment.duration(duration).seconds();
      default:
        return 0;
    }
  };

  // console.log(`
  // ${durationIn.years} years
  // ${durationIn.months} months
  // ${durationIn.days} days
  // ${durationIn.hours} hours
  // ${durationIn.minutes} minutes
  // ${durationIn.seconds} seconds
  // 	`);

  return (
    <>
      <TimerViewGrid>
        <Container margin="0 64px 0 0">
          <TimerView
            type="date"
            time={{
              time1: durationIn('years'),
              time2: durationIn('months'),
              time3: durationIn('days'),
            }}
          />
        </Container>
        <TimerView
          type="time"
          time={{
            time1: durationIn('hours'),
            time2: durationIn('minutes'),
            time3: durationIn('seconds'),
          }}
        />
      </TimerViewGrid>
      <Button
        onClick={() => {
          dispatch(inAddictionChange(inAddiction));
        }}
        type="main"
      >
        выпил
      </Button>
    </>
  );
};

const TimerViewGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 100px;
`;
