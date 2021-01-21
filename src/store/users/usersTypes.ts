export const USER_LANGUAGE_CHANGE = 'USER_LANGUAGE_CHANGE';
export const USER_SHOW_LOADER = 'USER_SHOW_LOADER';
export const USER_HIDE_LOADER = 'USER_HIDE_LOADER';
export const USER_SET_LOADER = 'USER_SET_LOADER';

export interface IUsersStateLoading {
  main: boolean;
  component: boolean;
}
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

interface userShowLoader {
  type: typeof USER_SHOW_LOADER;
  // payload: IUsersState;
}
interface userHideLoader {
  type: typeof USER_HIDE_LOADER;
  // payload: IUsersState;
}
interface userSetLoader {
  type: typeof USER_SET_LOADER;
  payload: IUsersStateLoading;
}

export type UserActionsType =
  | userLanguageChange
  | userHideLoader
  | userShowLoader
  | userSetLoader;
