import { useEffect, useState } from 'react';
import moment from 'moment';

import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { getDurationNormalize } from '../functions/moment';

export const useCurrentDuration = (): any[] => {
  const currentTime = useSelector(
    (state: RootState) => state.timers.currentTimer.beginDate,
    shallowEqual,
  );

  const currentRecordIndex = useSelector(
    (state: RootState) => state.timers.currentRecordIndex,
  );

  const [startDate, setStartDate] = useState(moment(currentTime));

  const [duration, setDuration] = useState({
    milliseconds: +moment() - +startDate,
  });

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    if (currentTime) {
      const interval = setInterval(() => {
        setDuration({
          milliseconds: +moment() - +startDate,
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [duration]);

  useEffect(() => {
    if (currentTime) {
      setStartDate(moment(currentTime));
      setDuration({
        milliseconds: +moment() - +moment(currentTime),
      });
    }
  }, [currentTime]);

  return [
    duration.milliseconds,
    getDurationNormalize('full', duration.milliseconds),
    moment.duration(duration.milliseconds),
  ];
};
