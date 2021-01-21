import {
  IUsersState,
  UserActionsType,
  UsersStateLoadingArgumentType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
} from './usersTypes';

export const userLanguageChange = (payload: IUsersState): UserActionsType => {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
};

export const userSetLoader = (payload: UsersStateLoadingArgumentType) => {
  return (dispatch: any, getState: any) => {
    let loading = {
      ...getState().users.loading,
      ...payload,
    };
    dispatch({
      type: USER_SET_LOADER,
      payload: loading,
    });
  };
};
