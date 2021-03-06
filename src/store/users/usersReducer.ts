import {
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
  USER_SET_LOADER,
  GET_TOKEN_FROM_LOCALSTORAGE,
  FETCH_REGISTER_EMAIL,
  CLEAR_AUTH_SESSION,
  FETCH_LOGIN_EMAIL,
  FETCH_AUTH_GOOGLE,
} from './usersTypes';

const initialState: IUsersState = {
  userLanguage: 'ru',
  currentCategoryId: 1,
  userId: 0,
  token: '',
  isAuth: false,
  loading: {
    main: false,
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
    case FETCH_REGISTER_EMAIL:
      return { ...state, ...action.payload };
    case FETCH_LOGIN_EMAIL:
      return { ...state, ...action.payload };
    case FETCH_AUTH_GOOGLE:
      return { ...state, ...action.payload };
    case GET_TOKEN_FROM_LOCALSTORAGE:
      return { ...state, ...action.payload };
    case CLEAR_AUTH_SESSION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
