import {
  GET_CURENT_TIMER,
  INIT_TIMERS,
  ITimersActionType,
} from './timersTypes';
import { setInAddiction } from '../users/usersActions';

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
