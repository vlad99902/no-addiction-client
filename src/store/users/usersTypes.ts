export const IN_ADDICTION_ON = "USER/IN_ADDICTION_ON";
export const IN_ADDICTION_OFF = "USER/IN_ADDICTION_OFF";
export const IN_ADDICTION_CHANGE = "USER/IN_ADDICTION_CHANGE";
export const USER_LANGUAGE_CHANGE = "USER/USER_LANGUAGE_CHANGE";

export interface IUsersState {
  inAddiction: boolean;
  userLanguage: string;
}

interface inAddictionOn {
  type: typeof IN_ADDICTION_ON;
}
interface inAddictionOff {
  type: typeof IN_ADDICTION_OFF;
}
interface inAddictionChange {
  type: typeof IN_ADDICTION_CHANGE;
  payload: boolean;
}
interface userLanguageChange {
  type: typeof USER_LANGUAGE_CHANGE;
  payload: IUsersState;
}

export type UserActionsType =
  | inAddictionOn
  | inAddictionOff
  | userLanguageChange
  | inAddictionChange;
