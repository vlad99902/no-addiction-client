import {
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  FETCH_REGISTER_WITH_EMAIL,
} from './usersTypes';

const initialState: IUsersState = {
  userLanguage: 'ru',
  currentCategoryId: 1,
  userId: 0,
  token: '',
  isAuth: false,
  loading: {
    main: true,
    component: false,
    headerSwitcher: false,
  },
};

export const usersReducer = (
  state: IUsersState = initialState,
  action: UserActionsType,
): IUsersState => {
  switch (action.type) {
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };
    case USER_SET_LOADER:
      return { ...state, loading: action.payload };
    case FETCH_REGISTER_WITH_EMAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
