import React, { useState, useEffect } from "react";

import styled from "styled-components";
import moment from "moment";

export const CountDown: React.FC = () => {
  const [countdownWords] = useState({
    years: "year",
    months: "month",
    days: "day",
    hours: "hour",
    minutes: "minute",
    seconds: "second",
  });

  /**
   * Get current countdown duration
   */
  const [count, setCount] = useState(
    moment().subtract(
      moment().set("millisecond", 53647920000000).get("millisecond")
    )
  );

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    const interval = setInterval(
      () => setCount(moment(count).add(1, "seconds")),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const getCurrentDateWord = (time: number): string => {
    if (time !== 1 && time !== 0) {
      return "s";
    }
    return "";
  };

  return (
    <WrapperGrid>
      <HoursTime>{count.hour()} </HoursTime>
      <HoursTitle>
        {countdownWords.hours + getCurrentDateWord(count.hour())}
      </HoursTitle>

      <MinutesTime>{count.minute()} </MinutesTime>
      <MinutesTitle>
        {countdownWords.minutes + getCurrentDateWord(count.minute())}
      </MinutesTitle>
      <SecondsTime>{count.second()} </SecondsTime>
      <SecondsTitle>
        {countdownWords.seconds + getCurrentDateWord(count.second())}
      </SecondsTitle>
    </WrapperGrid>
  );
};

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 20%, 80%;
  grid-column-gap: 16px;
  justify-items: right;
  align-items: center;
  font-size: 48px;
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
