import {
  ITimersState,
  ITimersActionType,
  SET_IN_ADDICTION,
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION_FALSE,
  SET_IN_ADDICTION_TRUE,
  GET_CURENT_TIMER,
  INIT_TIMERS,
} from './timersTypes';

const initialState: ITimersState = {
  currentTimer: {
    begin_date: '',
  },
  inAddiction: true,
};

export const timersReducer = (
  state: ITimersState = initialState,
  action: ITimersActionType,
): ITimersState => {
  switch (action.type) {
    case IN_ADDICTION_CHANGE:
      return { ...state, inAddiction: action.payload };
    case SET_IN_ADDICTION:
      return { ...state, inAddiction: action.payload };
    case SET_IN_ADDICTION_FALSE:
      return { ...state, inAddiction: false };
    case SET_IN_ADDICTION_TRUE:
      return { ...state, inAddiction: true };
    case GET_CURENT_TIMER:
      return { ...state, currentTimer: action.currentDate };
    case INIT_TIMERS:
      return { ...state };
    default:
      return state;
  }
};
