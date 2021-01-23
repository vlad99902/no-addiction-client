import {
  fetchUpdateCurrentTimer,
  fetchCreateCurrentTimer,
  deleteTimerById,
} from '../storeFunctions/timersFunctions';
import moment from 'moment';

import { userSetLoader } from './../users/usersActions';

import {
  TimersActionType,
  AsyncActionType,
  GET_CURENT_TIMER,
  APP_INIT,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION,
  GET_RANDOM_BAD_QUOTE,
  GET_RANDOM_GOOD_QUOTE,
  GET_IN_ADDICTION,
  CLEAR_CURRENT_TIMER,
  FETCH_DELETE_TIMER,
  FETCH_RECORDS_LIST,
} from './timersTypes';

export const initState = (): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      dispatch(userSetLoader({ main: true, headerSwitcher: true }));
      await dispatch(getCurrentTimer());
      await dispatch(getInAddiction());

      await dispatch(fetchRecordsList());

      getState().timers.inAddiction
        ? await dispatch(getRandomBadQuote())
        : await dispatch(getRandomGoodQuote());

      dispatch({ type: APP_INIT });

      dispatch(userSetLoader({ main: false, headerSwitcher: false }));
    } catch (error) {
      console.log(error);
      dispatch(userSetLoader({ main: false }));
    }
  };
};

export const fetchRecordsList = (): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      const result = await fetch('http://localhost:3000/api/timers/records');
      let json = await result.json();

      json = json.map((rec: any) => ({
        ...rec,
        duration: moment.duration(
          +moment(rec.endDate) - +moment(rec.beginDate),
        ),
      }));

      let currentIndex: number = -1;
      if (!getState().timers.inAddiction) {
        const currentTimer = getState().timers.currentTimer;
        // let resArray: any[] = [];
        const currentDuration = moment.duration(
          +moment() - +moment(currentTimer.beginDate),
        );
        json.forEach((el: any, i: number, ar: any) => {
          if (el.duration > currentDuration) {
            ++currentIndex;
          }
        });
        ++currentIndex;

        // console.log(currentIndex);

        // let isInserted: boolean = false;
        // let iMax: number = 0;
        // json.length < 10 ? (iMax = json.length) : (iMax = 10);
        // for (let i: number = 0; i < iMax; i++) {
        //   if (i === currentIndex && !isInserted) {
        //     resArray[i] = {
        //       recordId: currentTimer.timerId,

        //       ...currentTimer,
        //       duration: currentDuration,
        //     };
        //     isInserted = true;
        //   }
        //   isInserted ? (resArray[i + 1] = json[i]) : (resArray[i] = json[i]);
        // }

        // json = resArray;
        // console.log(resArray);
      }

      dispatch({
        type: FETCH_RECORDS_LIST,
        records: json,
        currentRecordIndex: currentIndex,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

/**
 * Calling fetch to delete timer. After that fetching new records list.
 * @param {number} timerId - timer Id to delete
 */
export const fetchDeleteTimer = (timerId: number): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await deleteTimerById(timerId);

      await dispatch(fetchRecordsList());
      dispatch({ type: FETCH_DELETE_TIMER });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const ifurrentTimerOneOfRecords = () => {};

export const getInAddiction = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'http://localhost:3000/api/timers/current?inAddiction=true',
      );
      const json = await res.json();

      dispatch({ type: GET_IN_ADDICTION, ...json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearCurrentTimer = (): AsyncActionType => {
  return async (dispatch, getState) => {
    const timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
      //delete current timer
      await fetchUpdateCurrentTimer(getState(), timeNow);
      await fetchCreateCurrentTimer(getState(), timeNow);

      dispatch({ type: CLEAR_CURRENT_TIMER });
      await dispatch(fetchRecordsList());
      await dispatch(getCurrentTimer());
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCurrentTimer = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/api/timers/current');
      const json = await res.json();

      dispatch({ type: GET_CURENT_TIMER, currentDate: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const inAddictionChange = (
  date: string | null = null,
): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      if (!getState().users.loading.main) {
        dispatch(userSetLoader({ main: true }));
      }
      const inAddiction = getState().timers.inAddiction;

      //if now inAddiction
      if (date === null) {
        date = moment().format('YYYY-MM-DD HH:mm:ss');
      }
      if (inAddiction) {
        await fetchCreateCurrentTimer(getState(), date);
      } else {
        await fetchUpdateCurrentTimer(getState(), date);
      }

      dispatch({
        type: IN_ADDICTION_CHANGE,
        payload: !inAddiction,
      });

      getState().timers.inAddiction
        ? await dispatch(getRandomBadQuote())
        : await dispatch(getRandomGoodQuote());
      //вот на фронет обработать сообщение с бэка
      await dispatch(getCurrentTimer());

      await dispatch(fetchRecordsList());
      if (getState().users.loading.main) {
        dispatch(userSetLoader({ main: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setInAddiction = (inAddiction: boolean): TimersActionType => {
  return {
    type: SET_IN_ADDICTION,
    payload: inAddiction,
  };
};

export const getRandomBadQuote = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/api/quotes?isbad=true');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_BAD_QUOTE, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRandomGoodQuote = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3000/api/quotes?isbad=false');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_GOOD_QUOTE, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};
