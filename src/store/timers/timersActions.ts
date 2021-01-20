import {
  GET_CURENT_TIMER,
  INIT_TIMERS,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION_FALSE,
  SET_IN_ADDICTION_TRUE,
  SET_IN_ADDICTION,
  TimersActionType,
} from './timersTypes';

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

export const inAddictionChange = (inAddiction: boolean): TimersActionType => {
  return {
    type: IN_ADDICTION_CHANGE,
    payload: !inAddiction,
  };
};

export const setInAddiction = (inAddiction: boolean): TimersActionType => {
  return {
    type: SET_IN_ADDICTION,
    payload: inAddiction,
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

export const initTimers = () => {
  return async (dispatch: any, getState: any) => {
    try {
      await dispatch(getCurrentTimer());

      if (getState().timers.currentTimer.end_date === null) {
        dispatch(setInAddiction(false));
      }

      return { type: INIT_TIMERS };
    } catch (error) {
      console.log(error);
    }
  };
};
