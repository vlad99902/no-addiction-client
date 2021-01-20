import moment from 'moment';

import {
  GET_CURENT_TIMER,
  INIT_TIMERS,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION_FALSE,
  SET_IN_ADDICTION_TRUE,
  SET_IN_ADDICTION,
  TimersActionType,
  GET_RANDOM_BAD_QUOTE,
  GET_RANDOM_GOOD_QUOTE,
  GET_IN_ADDICTION,
  FETCH_CREATE_CURRENT_TIMER,
  FETCH_UPDATE_CURRENT_TIMER,
  CLEAR_CURRENT_TIMER,
} from './timersTypes';

export const initState = () => {
  return async (dispatch: any, getState: any) => {
    try {
      await dispatch(getCurrentTimer());
      await dispatch(getInAddiction());

      getState().timers.inAddiction
        ? await dispatch(getRandomBadQuote())
        : await dispatch(getRandomGoodQuote());

      return { type: INIT_TIMERS };
    } catch (error) {
      console.log(error);
    }
  };
};

export const getInAddiction = () => {
  return async (dispatch: any) => {
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

export const setInAddictionFalse = (): TimersActionType => {
  return {
    type: SET_IN_ADDICTION_FALSE,
  };
};

export const setInAddictionTrue = (): TimersActionType => {
  return {
    type: SET_IN_ADDICTION_TRUE,
  };
};

export const clearCurrentTimer = () => {
  return async (dispatch: any, getState: any) => {
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

export const getCurrentTimer = () => {
  // return async (dispatch: Dispatch<TimersActionType>) => {
  return async (dispatch: any) => {
    try {
      const res = await fetch('http://localhost:3000/api/timers/current');
      const json = await res.json();

      dispatch({ type: GET_CURENT_TIMER, currentDate: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCreateCurrentTimer = (newBeginDate: string) => {
  return async (dispatch: any, getState: any) => {
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

export const fetchUpdateCurrentTimer = (endDate: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      await fetch('http://localhost:3000/api/timers/current/update', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: getState().timers.currentTimer._id,
          endDate: endDate,
        }),
      });
      dispatch({ type: FETCH_UPDATE_CURRENT_TIMER });
    } catch (error) {
      console.log(error);
    }
  };
};

export const inAddictionChange = (date: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const inAddiction = getState().timers.inAddiction;

      //if now inAddiction
      if (inAddiction) {
        await dispatch(fetchCreateCurrentTimer(date));
      } else {
        await dispatch(fetchUpdateCurrentTimer(date));
      }

      //вот на фронет обработать сообщение с бэка
      await dispatch(getCurrentTimer());

      dispatch({
        type: IN_ADDICTION_CHANGE,
        payload: !inAddiction,
      });
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

export const getRandomBadQuote = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch('http://localhost:3000/api/quotes?isbad=true');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_BAD_QUOTE, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getRandomGoodQuote = () => {
  return async (dispatch: any) => {
    try {
      const res = await fetch('http://localhost:3000/api/quotes?isbad=false');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_GOOD_QUOTE, payload: json });
    } catch (error) {
      console.log(error);
    }
  };
};
