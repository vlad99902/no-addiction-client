import {
  GET_CURENT_TIMER,
  INIT_TIMERS,
  ITimersActionType,
} from './timersTypes';
import { inAddictionChange } from '../users/usersActions';

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
      dispatch(getCurrentTimer());
      dispatch(inAddictionChange(getState().currentDate.end_date));
      console.log(getState());

      if (!getState().currentDate.end_date) {
        console.log('я сейчас бухаю');
      }

      return { type: INIT_TIMERS };
    } catch (error) {
      console.log(error);
    }
  };
}
