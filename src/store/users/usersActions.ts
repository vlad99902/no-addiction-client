import {
  IN_ADDICTION_CHANGE,
  IN_ADDICTION_OFF,
  IN_ADDICTION_ON,
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
} from "./usersTypes";

export function inAddictionOn(): UserActionsType {
  return {
    type: IN_ADDICTION_ON,
  };
}
export function inAddictionOff(): UserActionsType {
  return {
    type: IN_ADDICTION_OFF,
  };
}
export function inAddictionChange(inAddiction: boolean): UserActionsType {
  return {
    type: IN_ADDICTION_CHANGE,
    payload: !inAddiction,
  };
}

export function userLanguageChange(payload: IUsersState): UserActionsType {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
}
