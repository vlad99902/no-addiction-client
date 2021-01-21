import {
  IUsersState,
  IUsersStateLoading,
  UserActionsType,
  USER_HIDE_LOADER,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  USER_SHOW_LOADER,
} from './usersTypes';

export const userLanguageChange = (payload: IUsersState): UserActionsType => {
  return {
    type: USER_LANGUAGE_CHANGE,
    payload,
  };
};

export const userShowLoader = (): UserActionsType => ({
  type: USER_SHOW_LOADER,
  // payload: payload,
});

export const userHideLoader = (): UserActionsType => ({
  type: USER_HIDE_LOADER,
  // payload: payload,
});

export const userSetLoader = (
  payload: { main: boolean } | { component: boolean }
) => {
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
