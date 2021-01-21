import React, { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { getDurationNormalize } from '../functions/moment';

import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { TimerView } from '../containers/TimerView';
import { Container } from '../components/Container';

export const CountDown: React.FC = () => {
  const currentTime = useSelector(
    (state: RootState) => state.timers.currentTimer.beginDate
  );

  const [startDate, setStartDate] = useState(moment(currentTime));

  const [duration, setDuration] = useState(+moment() - +startDate);

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    const interval = setInterval(
      () => setDuration(+moment() - +startDate),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [duration]);

  useEffect(() => {
    setStartDate(moment(currentTime));
    setDuration(+moment() - +moment(currentTime));
  }, [currentTime]);

  return (
    <>
      <TimerViewGrid>
        <Container margin="0 64px 0 0">
          <TimerView
            type="date"
            time={{
              time1: +getDurationNormalize('years', duration),
              time2: +getDurationNormalize('months', duration),
              time3: +getDurationNormalize('days', duration),
            }}
          />
        </Container>
        <TimerView
          type="time"
          time={{
            time1: +getDurationNormalize('hours', duration),
            time2: +getDurationNormalize('minutes', duration),
            time3: +getDurationNormalize('seconds', duration),
          }}
        />
      </TimerViewGrid>
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
