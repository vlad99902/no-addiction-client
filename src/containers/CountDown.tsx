import React, { useState, useEffect } from "react";

import styled from "styled-components";
import moment from "moment";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { inAddictionChange } from "../store/users/usersActions";
import { Title } from "../components/Title";
import { start } from "repl";

export const CountDown: React.FC = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.users.inAddiction
  );
  const dispatch = useDispatch();

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
  // const [count, setCount] = useState(
  //   moment().subtract(
  //     moment().set("millisecond", 53647920000000).get("millisecond")
  //   )
  // );

  const startDate = moment().set({
    year: 2020,
    month: 11,
    date: 27,
    hour: 0,
    minute: 0,
    second: 0,
  });
  let countDate = +moment() - +startDate;
  console.log();
  // console.log(countDate);

  let year = moment().subtract(startDate.get("year"), "year").get("year");
  let month = moment().subtract(startDate.get("month"), "month").get("month");
  let day = moment().subtract(startDate.get("date"), "day").get("date");
  let hour = moment().subtract(startDate.get("hour"), "hour").get("hour");
  let min = moment().subtract(startDate.get("minute"), "minutes").get("minute");
  let sec = moment().subtract(startDate.get("second"), "second").get("second");

  console.log(`Years: ${year}, Months: ${month}, Days: ${day}`);

  const [count, setCount] = useState(countDate);
  // console.log();

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    const interval = setInterval(() => setCount(+startDate), 1000);

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
    <>
      <Title mb="60px" fz="96px">
        я не пью уже
      </Title>
      <WrapperGrid>
        <HoursTime>{hour} </HoursTime>
        <HoursTitle>
          {countdownWords.hours + getCurrentDateWord(hour)}
        </HoursTitle>
        <MinutesTime>{min} </MinutesTime>
        <MinutesTitle>
          {countdownWords.minutes + getCurrentDateWord(min)}
        </MinutesTitle>
        <SecondsTime>{sec} </SecondsTime>
        <SecondsTitle>
          {countdownWords.seconds + getCurrentDateWord(sec)}
        </SecondsTitle>
      </WrapperGrid>
      <Button
        onClick={() => {
          dispatch(inAddictionChange(inAddiction));
        }}
        type="main"
      >
        выпил za as
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
