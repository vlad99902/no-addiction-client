import {
  IN_ADDICTION_CHANGE,
  IN_ADDICTION_OFF,
  IN_ADDICTION_ON,
  IUsersState,
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
    case IN_ADDICTION_ON:
      return { ...state, inAddiction: true };
    case IN_ADDICTION_OFF:
      return { ...state, inAddiction: false };
    case IN_ADDICTION_CHANGE:
      return { ...state, inAddiction: action.payload };
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };
    default:
      return state;
  }
}
