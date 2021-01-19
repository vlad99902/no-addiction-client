export const USER_LANGUAGE_CHANGE = 'USER/USER_LANGUAGE_CHANGE';

export interface IUsersState {
  userLanguage: string;
}
interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

export type UserActionsType = userLanguageChange;
