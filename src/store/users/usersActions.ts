import {
  ActionType,
  FETCH_REGISTER_EMAIL,
  IUsersState,
  UserActionsType,
  UsersStateLoadingArgumentType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  GET_TOKEN_FROM_LOCALSTORAGE,
  CLEAR_AUTH_SESSION,
  FETCH_AUTH_GOOGLE,
  FETCH_LOGIN_EMAIL,
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
        type: FETCH_REGISTER_EMAIL,
        payload: { token: res.token, isAuth: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginWithEmail = (
  usernameOrEmail: string,
  password: string,
): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await requestHTTP(
        'http://localhost:3000/api/login',
        'POST',
        '',
        {
          usernameOrEmail,
          password,
        },
      );
      localStorage.setItem('userData', JSON.stringify({ token: res.token }));
      dispatch({
        type: FETCH_LOGIN_EMAIL,
        payload: { token: res.token, isAuth: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const authWithGoogle = (): AsyncActionType => {
  return async (dispatch) => {
    try {
      const res = await requestHTTP(
        'http://localhost:3000/api/auth/google',
        'GET',
        '',
      );
      localStorage.setItem('userData', JSON.stringify({ token: res.token }));
      dispatch({
        type: FETCH_AUTH_GOOGLE,
        payload: { token: res.token, isAuth: true },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTokenFromLocalstorage = (): UserActionsType => {
  let data: { [key: string]: any } = { token: '', isAuth: false };

  if (localStorage.getItem('userData')) {
    data = JSON.parse('' + localStorage.getItem('userData'));
    data.isAuth = true;
  }

  return {
    type: GET_TOKEN_FROM_LOCALSTORAGE,
    payload: { token: data.token, isAuth: data.isAuth },
  };
};

export const clearAuthSession = (): UserActionsType => {
  localStorage.removeItem('userData');
  return {
    type: CLEAR_AUTH_SESSION,
    payload: { token: '', isAuth: false },
  };
};
