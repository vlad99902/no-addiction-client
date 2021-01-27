import {
  ActionType,
  FETCH_REGISTER_OR_LOGIN_WITH_EMAIL,
  IUsersState,
  UserActionsType,
  UsersStateLoadingArgumentType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  GET_TOKEN_FROM_LOCALSTORAGE,
  CLEAR_AUTH_SESSION,
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

/**
 * Register with email and save token
 * @param {string} username
 * @param {string} email
 * @param {string} password
 */
export const authWithEmail = (
  type: 'register' | 'login',
  username: string = '',
  email: string = '',
  password: string = '',
): AsyncActionType => {
  return async (dispatch) => {
    let link: string = '';
    type === 'register'
      ? (link = 'http://localhost:3000/api/register')
      : (link = 'http://localhost:3000/api/login');
    try {
      const res = await requestHTTP(link, 'POST', '', {
        username,
        email,
        password,
      });
      localStorage.setItem('userData', JSON.stringify({ token: res.token }));
      dispatch({
        type: FETCH_REGISTER_OR_LOGIN_WITH_EMAIL,
        payload: { token: res.token, isAuth: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTokenFromLocalstorage = (): UserActionsType => {
  const data = JSON.parse('' + localStorage.getItem('userData'));
  // if (data &&data.token) {

  // }
  return {
    type: GET_TOKEN_FROM_LOCALSTORAGE,
    payload: { token: data.token, isAuth: true },
  };
};

export const clearAuthSession = (): UserActionsType => {
  localStorage.removeItem('userData');
  return {
    type: CLEAR_AUTH_SESSION,
    payload: { token: '', isAuth: false },
  };
};
