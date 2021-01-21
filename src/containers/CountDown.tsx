import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { Button } from '../components/Button';

import { TimerView } from '../containers/TimerView';
import { Container } from '../components/Container';
import { clearCurrentTimer } from '../store/timers/timersActions';

type DurationInType =
  | 'years'
  | 'months'
  | 'days'
  | 'hours'
  | 'minutes'
  | 'seconds';

export const CountDown: React.FC = () => {
  const dispatch = useDispatch();

  const currentTime = useSelector(
    (state: RootState) => state.timers.currentTimer.beginDate,
  );

  const [startDate, setStartDate] = useState(moment(currentTime));

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

  useEffect(() => {
    setStartDate(moment(currentTime));
    setDuration(+moment() - +moment(currentTime));
  }, [currentTime]);

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
      <Button onClick={() => dispatch(clearCurrentTimer())} type="main">
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
