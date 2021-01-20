export const USER_LANGUAGE_CHANGE = 'USER/USER_LANGUAGE_CHANGE';

export interface IUsersState {
  userLanguage: string;
  userId: 0;
  currentCategoryId: 1;
}
interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

export type UserActionsType = userLanguageChange;
