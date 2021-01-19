import {
  IN_ADDICTION_CHANGE,
  IUsersState,
  SET_IN_ADDICTION,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
} from './usersTypes';

const initialState: IUsersState = {
  inAddiction: true,
  userLanguage: 'ru',
};

export function usersReducer(
  state: IUsersState = initialState,
  action: UserActionsType,
): IUsersState {
  switch (action.type) {
    case IN_ADDICTION_CHANGE:
      return { ...state, inAddiction: action.payload };
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };
    case SET_IN_ADDICTION:
      return { ...state, inAddiction: action.payload };
    default:
      return state;
  }
}
