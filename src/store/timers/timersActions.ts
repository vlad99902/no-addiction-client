import { userHideLoader } from './../users/usersActions';
import { userShowLoader } from '../users/usersActions';
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
        'http://localhost:3000/api/timers/current?inAddiction=true'
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

export const inAddictionChange = (newBeginDate: string) => {
  // return {
  //   type: IN_ADDICTION_CHANGE,
  //   payload: !inAddiction,
  // };
  return async (dispatch: any, getState: any) => {
    try {
      const inAddiction = getState().timers.inAddiction;

      //if now inAddiction
      if (inAddiction) {
        console.log(
          JSON.stringify({
            userId: getState().users.userId,
            beginDate: newBeginDate,
            categoryId: getState().users.currentCategoryId,
          })
        );
        const res = await fetch(
          'http://localhost:3000/api/timers/current/create',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              userId: getState().users.userId,
              beginDate: newBeginDate,
              categoryId: getState().users.currentCategoryId,
            }),
          }
        );

        await dispatch(getCurrentTimer());
      }

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
      dispatch(userShowLoader());
      const res = await fetch('http://localhost:3000/api/quotes?isbad=true');
      const json = await res.json();

      dispatch({ type: GET_RANDOM_BAD_QUOTE, payload: json });
      dispatch(userHideLoader());
    } catch (error) {
      console.log(error);
      dispatch(userHideLoader());
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
