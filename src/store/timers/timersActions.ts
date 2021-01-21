import {
  fetchUpdateCurrentTimer,
  fetchCreateCurrentTimer,
} from '../storeFunctions/timersFunctions';
import moment from 'moment';

import { userHideLoader } from './../users/usersActions';
import { userShowLoader } from '../users/usersActions';

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
  return async (dispatch, getState) => {
    const timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
    try {
      //delete current timer
      await fetchUpdateCurrentTimer(getState(), timeNow);
      await fetchCreateCurrentTimer(getState(), timeNow);

      dispatch({ type: CLEAR_CURRENT_TIMER });
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
