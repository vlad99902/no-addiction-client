import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

export const USER_LANGUAGE_CHANGE = 'USER_LANGUAGE_CHANGE';
export const USER_SET_LOADER = 'USER_SET_LOADER';
export const FETCH_REGISTER_OR_LOGIN_WITH_EMAIL =
  'USER/FETCH_REGISTER_OR_LOGIN_WITH_EMAIL';
export const CLEAR_AUTH_SESSION = 'USER/CLEAR_AUTH_SESSION';
export const GET_TOKEN_FROM_LOCALSTORAGE = 'USER/GET_TOKEN_FROM_LOCALSTORAGE';

export type ActionType = ThunkAction<void, RootState, unknown, Action<String>>;
export interface IUsersStateLoading {
  main: boolean;
  component: boolean;
  headerSwitcher: boolean;
}
export type UsersStateLoadingArgumentType = {
  main?: boolean;
  component?: boolean;
  headerSwitcher?: boolean;
};
export interface IUsersState {
  userLanguage: string;
  userId: number;
  currentCategoryId: number;
  token: string;
  isAuth: boolean;
  loading: IUsersStateLoading;
}

interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

interface userSetLoader {
  type: typeof USER_SET_LOADER;
  payload: IUsersStateLoading;
}

interface registerWithEmail {
  type: typeof FETCH_REGISTER_OR_LOGIN_WITH_EMAIL;
  payload: { token: string; isAuth: boolean };
}
interface getTokenFromLocalStorage {
  type: typeof GET_TOKEN_FROM_LOCALSTORAGE;
  payload: { token: string; isAuth: boolean };
}
interface clearAuthSession {
  type: typeof CLEAR_AUTH_SESSION;
  payload: { token: string; isAuth: boolean };
}

export type UserActionsType =
  | userLanguageChange
  | userSetLoader
  | clearAuthSession
  | getTokenFromLocalStorage
  | registerWithEmail;
