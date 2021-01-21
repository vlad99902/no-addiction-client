import {
  IUsersState,
  UserActionsType,
  USER_HIDE_LOADER,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  USER_SHOW_LOADER,
} from './usersTypes';

const initialState: IUsersState = {
  userLanguage: 'ru',
  currentCategoryId: 1,
  userId: 0,
  loading: {
    main: true,
    component: true,
  },
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: UserActionsType
): IUsersState => {
  switch (action.type) {
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };
    case USER_SHOW_LOADER:
      return { ...state, loading: { main: true, component: true } };
    case USER_HIDE_LOADER:
      return { ...state, loading: { main: false, component: false } };
    case USER_SET_LOADER:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
