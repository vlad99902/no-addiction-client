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
  CLEAR_CURRENT_TIMER,
  FETCH_RECORDS_LIST,
} from './timersTypes';

const initialState: ITimersState = {
  currentTimer: {
    timerId: -1,
    beginDate: '',
    endDate: '',
  },
  quote: {
    quote: '',
    author: null,
    category: '',
  },
  records: [
    {
      recordId: -1,
      beginDate: '',
      endDate: '',
      duration: null,
    },
  ],
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
    case FETCH_RECORDS_LIST:
      return { ...state, records: action.records };
    case CLEAR_CURRENT_TIMER:
    default:
      return state;
  }
};
