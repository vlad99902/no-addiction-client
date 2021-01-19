import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  GET_CURENT_TIMER,
  INIT_TIMERS,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION_FALSE,
  SET_IN_ADDICTION_TRUE,
  SET_IN_ADDICTION,
  ITimersActionType,
} from './timersTypes';

export function setInAddictionFalse(): ITimersActionType {
  return {
    type: SET_IN_ADDICTION_FALSE,
  };
}

export function setInAddictionTrue(): ITimersActionType {
  return {
    type: SET_IN_ADDICTION_TRUE,
  };
}

export function inAddictionChange(inAddiction: boolean): ITimersActionType {
  return {
    type: IN_ADDICTION_CHANGE,
    payload: !inAddiction,
  };
}

export function setInAddiction(inAddiction: boolean): ITimersActionType {
  return {
    type: SET_IN_ADDICTION,
    payload: inAddiction,
  };
}

export function getCurrentTimer() {
  return async (dispatch: any) => {
    try {
      const res = await fetch('http://localhost:3000/api/timers/current');
      const json = await res.json();

      dispatch({ type: GET_CURENT_TIMER, currentDate: json });
    } catch (error) {
      console.log(error);
    }
  };
}

export function initTimers() {
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
}
