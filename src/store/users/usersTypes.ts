export const USER_LANGUAGE_CHANGE = 'USER_LANGUAGE_CHANGE';
export const USER_SHOW_LOADER = 'USER_SHOW_LOADER';
export const USER_HIDE_LOADER = 'USER_HIDE_LOADER';

export interface IUsersState {
  userLanguage: string;
  userId: 0;
  currentCategoryId: 1;
  loading: boolean;
}
interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

interface userShowLoader {
  type: typeof USER_SHOW_LOADER;
}
interface userHideLoader {
  type: typeof USER_HIDE_LOADER;
}

export type UserActionsType =
  | userLanguageChange
  | userHideLoader
  | userShowLoader;
