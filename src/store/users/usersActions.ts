import {
  IUsersState,
  UserActionsType,
  USER_HIDE_LOADER,
  USER_LANGUAGE_CHANGE,
  USER_SHOW_LOADER,
} from './usersTypes';

export const userLanguageChange = (payload: IUsersState): UserActionsType => {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
};

export const userShowLoader = () => ({
  type: USER_SHOW_LOADER,
});

export const userHideLoader = () => ({
  type: USER_HIDE_LOADER,
});
