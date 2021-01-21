import { Action } from 'redux';
import { RootState } from '../rootReducer';
import { ThunkAction } from 'redux-thunk';

export const INIT_TIMERS = 'TIMERS/INIT_TIMERS';
export const IN_ADDICTION_CHANGE = 'TIMERS/IN_ADDICTION_CHANGE';
export const SET_IN_ADDICTION = 'TIMERS/SET_IN_ADDICTION';
export const GET_CURENT_TIMER = 'TIMERS/GET_CURENT_TIMER';
export const GET_IN_ADDICTION = 'TIMERS/GET_IN_ADDICTION';
export const CLEAR_CURRENT_TIMER = 'TIMERS/CLEAR_CURRENT_TIMER';
export const FETCH_UPDATE_CURRENT_TIMER = 'TIMERS/FETCH_UPDATE_IN_ADDICTION';
export const FETCH_CREATE_CURRENT_TIMER = 'TIMERS/FETCH_CREATE_IN_ADDICTION';

export const GET_RANDOM_BAD_QUOTE = 'QUOTES/GET_RANDOM_BAD_QUOTE';
export const GET_RANDOM_GOOD_QUOTE = 'QUOTES/GET_RANDOM_GOOD_QUOTE';

/**
 * Quote object type
 */
type QuoteType = {
  quote: string;
  author: string | null;
  category: string;
};

/**
 * Current timer storage type
 */
type CurrentTimerType = {
  timerId: number;
  beginDate: string;
  endDate: string | null;
};

/**
 * State Interface. Setting up state types
 */
export interface ITimersState {
  currentTimer: CurrentTimerType;
  quote: QuoteType;
  inAddiction: boolean;
}
interface fetchUpdateInAddiction {
  type: typeof FETCH_UPDATE_CURRENT_TIMER;
}

interface clearCurrentTimer {
  type: typeof CLEAR_CURRENT_TIMER;
}
interface fetchCreateInAddiction {
  type: typeof FETCH_CREATE_CURRENT_TIMER;
}
interface getInAddiction {
  type: typeof GET_IN_ADDICTION;
  inAddiction: boolean;
}

interface inAddictionChange {
  type: typeof IN_ADDICTION_CHANGE;
  payload: boolean;
}
interface setInAddiction {
  type: typeof SET_IN_ADDICTION;
  payload: boolean;
}

interface initTimers {
  type: typeof INIT_TIMERS;
}

interface getCurrentTimer {
  type: typeof GET_CURENT_TIMER;
  currentDate: CurrentTimerType;
}
interface getRandomBadQuote {
  type: typeof GET_RANDOM_BAD_QUOTE;
  payload: QuoteType;
}
interface getRandomGoodQuote {
  type: typeof GET_RANDOM_GOOD_QUOTE;
  payload: QuoteType;
}

export type AsyncActionType = ThunkAction<
  void,
  RootState,
  unknown,
  Action<String>
>;

export type TimersActionType =
  | inAddictionChange
  | setInAddiction
  | initTimers
  | getCurrentTimer
  | getRandomBadQuote
  | fetchUpdateInAddiction
  | fetchCreateInAddiction
  | clearCurrentTimer
  | getInAddiction
  | getRandomGoodQuote;
