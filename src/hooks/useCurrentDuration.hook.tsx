import { useEffect, useState } from 'react';
import moment from 'moment';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';

import { getDurationNormalize } from '../functions/moment';
import { setCurrentRecordIndex } from '../store/timers/timersActions';

export const useCurrentDuration = (): any[] => {
  const currentTime = useSelector(
    (state: RootState) => state.timers.currentTimer.beginDate,
    shallowEqual,
  );

  const currentRecordIndex = useSelector(
    (state: RootState) => state.timers.currentRecordIndex,
  );

  const dispatch = useDispatch();

  const records = useSelector((state: RootState) => state.timers.records);

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

        if (
          records[currentRecordIndex - 1] &&
          +moment() - +startDate > +records[currentRecordIndex - 1].duration &&
          currentRecordIndex !== 0 &&
          currentRecordIndex !== -1
        ) {
          dispatch(setCurrentRecordIndex(currentRecordIndex - 1));
          console.log('dispatched');
        }
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
