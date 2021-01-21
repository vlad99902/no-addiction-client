import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';

export const USER_LANGUAGE_CHANGE = 'USER_LANGUAGE_CHANGE';
export const USER_SET_LOADER = 'USER_SET_LOADER';

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

export type UserActionsType = userLanguageChange | userSetLoader;
