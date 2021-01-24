import { useEffect, useState } from 'react';
import moment from 'moment';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { getDurationNormalize } from '../functions/moment';

export const useCurrentDuration = (): any[] => {
  const beginDate = useSelector(
    (state: RootState) => state.timers.currentTimer.beginDate,
    shallowEqual,
  );

  const [startDate, setStartDate] = useState(moment(beginDate));

  const [duration, setDuration] = useState({
    milliseconds: +moment() - +startDate,
  });

  /**
   * Effect to countdown timer
   */
  useEffect(() => {
    if (beginDate) {
      const interval = setInterval(() => {
        setDuration({
          milliseconds: +moment() - +startDate,
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [startDate]);

  useEffect(() => {
    if (beginDate) {
      setDuration({
        milliseconds: +moment() - +moment(beginDate),
      });
      setStartDate(moment(beginDate));
    }
  }, [beginDate]);

  return [
    duration.milliseconds,
    getDurationNormalize('full', duration.milliseconds),
    moment.duration(duration.milliseconds),
  ];
};
