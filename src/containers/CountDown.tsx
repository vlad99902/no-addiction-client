import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const CountDown: React.FC = () => {
  const [countdownWords, setCountdownWords] = useState({
    years: 'years',
    months: 'months',
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
  });
  const [countdown, setCountdown] = useState({
    now: moment(),
    years: moment().year(),
    months: moment().month(),
    days: moment().days(),
    hours: moment().hour(),
    minutes: moment().minute(),
    seconds: moment().second(),
  });

  const [counterDate, setCounterDate] = useState({
    date: moment().millisecond(12321321321),
    years: 1,
    months: moment().month(),
    days: moment().days(),
    hours: moment().hour(),
    minutes: moment().minute(),
    seconds: moment().second(),
  });

  console.log(counterDate.date);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown({
        ...{
          now: moment().subtract(7, 'days'),
          years: moment().year(),
          months: moment().month(),
          days: moment().days(),
          hours: moment().hour(),
          minutes: moment().minute(),
          seconds: moment().second(),
        },
      });
      console.log(countdown.now);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {countdown.years && (
        <Years>
          {countdown.years} {countdownWords.years}
        </Years>
      )}
      {(countdown.months || countdown.months === 0) && (
        <Months>
          {countdown.months} {countdownWords.months}
        </Months>
      )}
      {countdown.days && (
        <Days>
          {countdown.days} {countdownWords.days}
        </Days>
      )}
      <WrapperGrid>
        <Hours>
          {countdown.hours} {countdownWords.hours}
        </Hours>
        <Minutes>
          {countdown.minutes} {countdownWords.minutes}
        </Minutes>
        <Seconds>
          {countdown.seconds} {countdownWords.seconds}
        </Seconds>
      </WrapperGrid>
    </>
  );
};

const WrapperGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 48px;
`;

const Years = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;

const Months = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
`;

const Days = styled.div`
  grid-row: 1/2;
  grid-column: 3/4;
`;

const Hours = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const Minutes = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const Seconds = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;
`;
