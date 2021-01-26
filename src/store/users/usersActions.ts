import {
  ActionType,
  FETCH_REGISTER_WITH_EMAIL,
  IUsersState,
  UserActionsType,
  UsersStateLoadingArgumentType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
} from './usersTypes';

import { requestHTTP } from '../../functions/requestHTTP';

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

export const registerWithEmail = (
  username: string = '',
  email: string = '',
  password: string = '',
): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await requestHTTP(
        'http://localhost:3000/api/register',
        'POST',
        '',
        {
          username,
          email,
          password,
        },
      );
      localStorage.setItem('userData', JSON.stringify({ token: res.token }));
      dispatch({
        type: FETCH_REGISTER_WITH_EMAIL,
        payload: { token: res.token, isAuth: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
