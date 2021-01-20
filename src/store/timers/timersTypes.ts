export const INIT_TIMERS = 'TIMERS/INIT_TIMERS';
export const IN_ADDICTION_CHANGE = 'TIMERS/IN_ADDICTION_CHANGE';
export const SET_IN_ADDICTION_FALSE = 'TIMERS/SET_IN_ADDICTION_FALSE';
export const SET_IN_ADDICTION_TRUE = 'TIMERS/SET_IN_ADDICTION_TRUE';
export const SET_IN_ADDICTION = 'TIMERS/SET_IN_ADDICTION';
export const GET_CURENT_TIMER = 'TIMERS/GET_CURENT_TIMER';
export const GET_IN_ADDICTION = 'TIMERS/GET_IN_ADDICTION';
// export const FETCH_UPDATE_IN_ADDICTION

export const INIT_QUOTES = 'QUOTES/INIT_QUOTES';
export const GET_RANDOM_BAD_QUOTE = 'QUOTES/GET_RANDOM_BAD_QUOTE';
export const GET_RANDOM_GOOD_QUOTE = 'QUOTES/GET_RANDOM_GOOD_QUOTE';

type QuoteType = {
  quote: string;
  author: string | null;
  category: string;
};
export interface ITimersState {
  currentTimer: {
    begin_date: string;
  };
  quote: QuoteType;
  inAddiction: boolean;
}

interface getInAddiction {
  type: typeof GET_IN_ADDICTION;
  inAddiction: boolean;
}

interface setInAddictionFalse {
  type: typeof SET_IN_ADDICTION_FALSE;
}

interface setInAddictionTrue {
  type: typeof SET_IN_ADDICTION_TRUE;
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
  currentDate: {
    begin_date: string;
  };
}

interface initQuotes {
  type: typeof INIT_QUOTES;
}
interface getRandomBadQuote {
  type: typeof GET_RANDOM_BAD_QUOTE;
  payload: QuoteType;
}
interface getRandomGoodQuote {
  type: typeof GET_RANDOM_GOOD_QUOTE;
  payload: QuoteType;
}

export type TimersActionType =
  | setInAddictionFalse
  | setInAddictionTrue
  | inAddictionChange
  | setInAddiction
  | initTimers
  | initQuotes
  | getCurrentTimer
  | getRandomBadQuote
  | getInAddiction
  | getRandomGoodQuote;
