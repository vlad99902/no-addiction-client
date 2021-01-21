import { RootState } from '../rootReducer';

export const fetchUpdateCurrentTimer = async (
  state: RootState,
  endDate: string,
): Promise<void> => {
  try {
    await fetch('http://localhost:3000/api/timers/current/update', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        id: state.timers.currentTimer.timerId,
        endDate: endDate,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateCurrentTimer = async (
  state: RootState,
  newBeginDate: string,
): Promise<void> => {
  try {
    await fetch('http://localhost:3000/api/timers/current/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userId: state.users.userId,
        beginDate: newBeginDate,
        categoryId: state.users.currentCategoryId,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
