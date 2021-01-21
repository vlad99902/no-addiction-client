import { userHideLoader } from './../users/usersActions';
import { userShowLoader } from '../users/usersActions';

import moment from 'moment';

import {
  TimersActionType,
  AsyncActionType,
  GET_CURENT_TIMER,
  INIT_TIMERS,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION,
  GET_RANDOM_BAD_QUOTE,
  GET_RANDOM_GOOD_QUOTE,
  GET_IN_ADDICTION,
  FETCH_CREATE_CURRENT_TIMER,
  FETCH_UPDATE_CURRENT_TIMER,
  CLEAR_CURRENT_TIMER,
} from './timersTypes';

export const initState = (): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      // dispatch(userShowLoader());
      await dispatch(getCurrentTimer());
      await dispatch(getInAddiction());

      getState().timers.inAddiction
        ? await dispatch(getRandomBadQuote())
        : await dispatch(getRandomGoodQuote());

      // dispatch(userHideLoader());
      dispatch({ type: INIT_TIMERS });
    } catch (error) {
      console.log(error);
      dispatch(userHideLoader());
    }
  };
};

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
  return async (dispatch) => {
    const timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
      //delete current timer
      await dispatch(fetchUpdateCurrentTimer(timeNow));
      await dispatch(fetchCreateCurrentTimer(timeNow));
      await dispatch(getCurrentTimer());
      dispatch({ type: CLEAR_CURRENT_TIMER });
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

export const fetchCreateCurrentTimer = (
  newBeginDate: string,
): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      await fetch('http://localhost:3000/api/timers/current/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          userId: getState().users.userId,
          beginDate: newBeginDate,
          categoryId: getState().users.currentCategoryId,
        }),
      });
      dispatch({ type: FETCH_CREATE_CURRENT_TIMER });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUpdateCurrentTimer = (endDate: string): AsyncActionType => {
  return async (dispatch, getState) => {
    try {
      await fetch('http://localhost:3000/api/timers/current/update', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: getState().timers.currentTimer.timerId,
          endDate: endDate,
        }),
      });
      dispatch({ type: FETCH_UPDATE_CURRENT_TIMER });
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
      const inAddiction = getState().timers.inAddiction;

      //if now inAddiction
      if (date === null) {
        date = moment().format('YYYY-MM-DD HH:mm:ss');
      }
      if (inAddiction) {
        await dispatch(fetchCreateCurrentTimer(date));
      } else {
        await dispatch(fetchUpdateCurrentTimer(date));
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
      // dispatch(userShowLoader());

      const res = await fetch('http://localhost:3000/api/quotes?isbad=true');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_BAD_QUOTE, payload: json });
      // dispatch(userHideLoader());
    } catch (error) {
      console.log(error);
      dispatch(userHideLoader());
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
