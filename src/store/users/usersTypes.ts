export const IN_ADDICTION_CHANGE = 'USER/IN_ADDICTION_CHANGE';
export const SET_IN_ADDICTION = 'USER/SET_IN_ADDICTION';
export const USER_LANGUAGE_CHANGE = 'USER/USER_LANGUAGE_CHANGE';

export interface IUsersState {
  inAddiction: boolean;
  userLanguage: string;
}

interface inAddictionChange {
  type: typeof IN_ADDICTION_CHANGE;
  payload: boolean;
}
interface setInAddiction {
  type: typeof SET_IN_ADDICTION;
  payload: boolean;
}
interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

export type UserActionsType =
  | userLanguageChange
  | inAddictionChange
  | setInAddiction;
