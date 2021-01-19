export const GET_CURENT_TIMER = 'TIMERS/GET_CURENT_TIMER';
export const INIT_TIMERS = 'TIMERS/INIT_TIMERS';

export interface ITimersState {
  currentTimer: {};
}

interface initTimers {
  type: typeof INIT_TIMERS;
}

interface getCurrentTimer {
  type: typeof GET_CURENT_TIMER;
  currentDate: {};
}

export type ITimersActionType = getCurrentTimer | initTimers;
