import {
  IUsersState,
  UserActionsType,
  USER_HIDE_LOADER,
  USER_LANGUAGE_CHANGE,
  USER_SHOW_LOADER,
} from './usersTypes';

const initialState: IUsersState = {
  userLanguage: 'ru',
  currentCategoryId: 1,
  userId: 0,
  loading: true,
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: UserActionsType
): IUsersState => {
  switch (action.type) {
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };
    case USER_SHOW_LOADER:
      return { ...state, loading: true };
    case USER_HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
