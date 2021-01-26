import {
  ActionType,
  FETCH_REGISTER_WITH_EMAIL,
  IUsersState,
  UserActionsType,
  UsersStateLoadingArgumentType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
} from './usersTypes';

import { AsyncActionType } from '../timers/timersTypes';

export const userLanguageChange = (payload: IUsersState): UserActionsType => {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
};

export const userSetLoader = (
  payload: UsersStateLoadingArgumentType,
): ActionType => {
  return (dispatch, getState) => {
    dispatch({
      type: USER_SET_LOADER,
      payload: { ...getState().users.loading, ...payload },
    });
  };
};

export const registerWithEmail = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_REGISTER_WITH_EMAIL });
    } catch (error) {}
  };
};
