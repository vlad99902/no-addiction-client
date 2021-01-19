import {
  IN_ADDICTION_CHANGE,
  SET_IN_ADDICTION,
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
} from './usersTypes';

export function inAddictionChange(inAddiction: boolean): UserActionsType {
  return {
    type: IN_ADDICTION_CHANGE,
    payload: !inAddiction,
  };
}

export function setInAddiction(inAddiction: boolean): UserActionsType {
  return {
    type: SET_IN_ADDICTION,
    payload: inAddiction,
  };
}

export function userLanguageChange(payload: IUsersState): UserActionsType {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
}
