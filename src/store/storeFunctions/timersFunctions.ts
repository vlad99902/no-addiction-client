import { AsyncActionType } from '../timers/timersTypes';

export const fetchUpdateCurrentTimer = (endDate: string): AsyncActionType => {
  return async (_, getState) => {
    try {
      await fetch('http://localhost:3000/api/timers/current/update', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          id: getState().timers.currentTimer.timerId,
          endDate: endDate,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
};
