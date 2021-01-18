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

  /**
   * Get current countdown duration
   */
  const [count, setCount] = useState(
    moment().subtract(+moment().millisecond(53647920000000)),
  );

  // const [countdown, setCountdown] = useState({
  //   mileseconds: count,
  //   years: count.year(),
  //   months: count.month(),
  //   days: count.days(),
  //   hours: count.hour(),
  //   minutes: count.minute(),
  //   seconds: count.second(),
  // });

  // const [counterDate, setCounterDate] = useState({
  //   date: moment(),
  //   years: moment().year(),
  //   months: moment().month(),
  //   days: moment().days(),
  //   hours: moment().hour(),
  //   minutes: moment().minute(),
  //   seconds: moment().second(),
  // });

  useEffect(() => {
    const interval = setInterval(
      () => setCount(moment(count).add(1, 'seconds')),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <Years>
        {count.year()} {countdownWords.years}
      </Years>

      <Months>
        {} {countdownWords.months}
      </Months>

      <Days>
        {} {countdownWords.days}
      </Days>

      <WrapperGrid>
        <Hours>
          {count.hour()} {countdownWords.hours}
        </Hours>
        <Minutes>
          {count.minute()} {countdownWords.minutes}
        </Minutes>
        <Seconds>
          {count.second()} {countdownWords.seconds}
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
