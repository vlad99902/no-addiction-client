import {
  ITimersState,
  ITimersActionType,
  GET_CURENT_TIMER,
  INIT_TIMERS,
} from './timersTypes';

const initialState: ITimersState = {
  currentTimer: {},
};

export const timersReducer = (
  state: ITimersState = initialState,
  action: ITimersActionType,
): ITimersState => {
  switch (action.type) {
    case GET_CURENT_TIMER:
      return { ...state, currentTimer: action.currentDate };
    case INIT_TIMERS:
      return { ...state };
    default:
      return state;
  }
};
