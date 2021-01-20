import {
  ITimersState,
  TimersActionType,
  SET_IN_ADDICTION,
  IN_ADDICTION_CHANGE,
  GET_CURENT_TIMER,
  INIT_TIMERS,
  GET_RANDOM_BAD_QUOTE,
  GET_RANDOM_GOOD_QUOTE,
  GET_IN_ADDICTION,
  INIT_QUOTES,
  FETCH_CREATE_CURRENT_TIMER,
  FETCH_UPDATE_CURRENT_TIMER,
  CLEAR_CURRENT_TIMER,
} from './timersTypes';

const initialState: ITimersState = {
  currentTimer: {
    begin_date: '',
  },
  quote: {
    quote: '',
    author: null,
    category: '',
  },
  inAddiction: true,
};

export const timersReducer = (
  state: ITimersState = initialState,
  action: TimersActionType,
): ITimersState => {
  switch (action.type) {
    case IN_ADDICTION_CHANGE:
      return { ...state, inAddiction: action.payload };
    case SET_IN_ADDICTION:
      return { ...state, inAddiction: action.payload };
    case GET_CURENT_TIMER:
      return { ...state, currentTimer: action.currentDate };
    case INIT_TIMERS:
      return { ...state };
    case GET_RANDOM_BAD_QUOTE:
      return { ...state, quote: action.payload };
    case GET_RANDOM_GOOD_QUOTE:
      return { ...state, quote: action.payload };
    case GET_IN_ADDICTION:
      return { ...state, inAddiction: action.inAddiction };
    case INIT_QUOTES:
      return { ...state };
    case FETCH_CREATE_CURRENT_TIMER:
      return { ...state };
    case FETCH_UPDATE_CURRENT_TIMER:
      return { ...state };
    case CLEAR_CURRENT_TIMER:
      return { ...state };
    default:
      return state;
  }
};
