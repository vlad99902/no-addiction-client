import { RootState } from '../rootReducer';
import { requestHTTP, backEndLink } from '../../functions/requestHTTP';

export const fetchUpdateCurrentTimer = async (
  state: RootState,
  endDate: string,
): Promise<void> => {
  try {
    const res = await requestHTTP(
      `${backEndLink}/api/timers/current/update`,
      'PUT',
      '_',
      {
        id: state.timers.currentTimer.timerId,
        endDate: endDate,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateCurrentTimer = async (
  state: RootState,
  newBeginDate: string,
): Promise<void> => {
  try {
    await requestHTTP(`${backEndLink}/api/timers/current/create`, 'POST', '_', {
      userId: state.users.userId,
      beginDate: newBeginDate,
      categoryId: state.users.currentCategoryId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTimerById = async (timerId: number): Promise<void> => {
  const body = { timerId };
  try {
    return await requestHTTP(
      `${backEndLink}/api/timers/delete`,
      'DELETE',
      '_',
      body,
    );
  } catch (error) {
    console.log(error);
  }
};
