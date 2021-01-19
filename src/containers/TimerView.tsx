import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../styles/colors';

type TimerViewType = {
  type: 'time' | 'date';
  fz?: string;
  time: {
    time1: number;
    time2: number;
    time3: number;
  };
};

/**
 * React.FC to set grid for timers
 * @param {'time'|'onlyDate'} type get component type
 * @param {object} time object of times (only 3 params)
 */

export const TimerView: React.FC<TimerViewType> = ({
  type,
  fz = '48px',
  time: { time1 = 0, time2 = 0, time3 = 0 },
}) => {
  /**
   * Use state to state words
   */
  const [countdownWords] = useState({
    years: 'year',
    months: 'month',
    days: 'day',
    hours: 'hour',
    minutes: 'minute',
    seconds: 'second',
  });

  /**
   * If time ends on 1 or 0 return s to add to word
   * @param {number} time get current time
   */
  const getCurrentDateWordEnding = (time: number): string => {
    if (time !== 1 && time !== 0) {
      return 's';
    }
    return '';
  };

  return (
    <WrapperGrid fz={fz}>
      <Time1Child>{time1} </Time1Child>
      <Title1Child>
        {type === 'date'
          ? countdownWords.years
          : countdownWords.hours + getCurrentDateWordEnding(time1)}
      </Title1Child>
      <Time2Child>{time2} </Time2Child>
      <Title2Child>
        {type === 'date'
          ? countdownWords.months
          : countdownWords.minutes + getCurrentDateWordEnding(time2)}
      </Title2Child>
      <Time3Child>{time3} </Time3Child>
      <Title3Child>
        {type === 'date'
          ? countdownWords.days
          : countdownWords.seconds + getCurrentDateWordEnding(time3)}
      </Title3Child>
    </WrapperGrid>
  );
};

const WrapperGrid = styled.div<{ fz: string }>`
  display: grid;
  grid-template-columns: 20%, 80%;
  grid-column-gap: 16px;
  justify-items: right;
  align-items: center;
  font-size: ${(props) => props.fz};
`;

const Time1Child = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: right;
`;
const Title1Child = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: left;
  color: ${colors.$darkGray};
`;

const Time2Child = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  justify-self: right;
`;
const Title2Child = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: left;
  color: ${colors.$darkGray};
`;

const Time3Child = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  justify-self: right;
`;

const Title3Child = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  justify-self: left;
  color: ${colors.$darkGray};
`;
