import {
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
} from './usersTypes';

export function userLanguageChange(payload: IUsersState): UserActionsType {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
}
