import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import moment from 'moment';
import { Button } from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { inAddictionChange } from '../store/timers/timersActions';
import { Title } from '../components/Title';

export const CountDown: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.timers.inAddiction
  );
  const [currentTime] = useState(
    useSelector((state: RootState) => state.timers.currentTimer.begin_date)
  );
  const dispatch = useDispatch();

  const [countdownWords] = useState({
    years: 'year',
    months: 'month',
    days: 'day',
    hours: 'hour',
    minutes: 'minute',
    seconds: 'second',
  });

  const [startDate] = useState(moment(moment(currentTime)));

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

  const durationIn = () => ({
    years: moment.duration(duration).years(),
    months: moment.duration(duration).months(),
    days: moment.duration(duration).days(),
    hours: moment.duration(duration).hours(),
    minutes: moment.duration(duration).minutes(),
    seconds: moment.duration(duration).seconds(),
  });

  // console.log(`
  // ${durationIn.years} years
  // ${durationIn.months} months
  // ${durationIn.days} days
  // ${durationIn.hours} hours
  // ${durationIn.minutes} minutes
  // ${durationIn.seconds} seconds
  // 	`);

  const getCurrentDateWord = (time: number): string => {
    if (time !== 1 && time !== 0) {
      return 's';
    }
    return '';
  };

  return (
    <>
      <Title mb="60px" fz="96px">
        я не пью уже
      </Title>
      <WrapperGrid>
        <HoursTime>{durationIn().hours} </HoursTime>
        <HoursTitle>
          {countdownWords.hours + getCurrentDateWord(durationIn().hours)}
        </HoursTitle>
        <MinutesTime>{durationIn().minutes} </MinutesTime>
        <MinutesTitle>
          {countdownWords.minutes + getCurrentDateWord(durationIn().minutes)}
        </MinutesTitle>
        <SecondsTime>{durationIn().seconds} </SecondsTime>
        <SecondsTitle>
          {countdownWords.seconds + getCurrentDateWord(durationIn().seconds)}
        </SecondsTitle>
      </WrapperGrid>
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

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 20%, 80%;
  grid-column-gap: 16px;
  justify-items: right;
  align-items: center;
  font-size: 48px;
  margin-bottom: 60px;
`;

const HoursTime = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: right;
`;
const HoursTitle = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: left;
`;

const MinutesTime = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
`;
const MinutesTitle = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: left;
`;

const SecondsTime = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  justify-self: right;
`;

const SecondsTitle = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: left;
`;
