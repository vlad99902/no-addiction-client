import {
  IUsersState,
  UserActionsType,
  USER_LANGUAGE_CHANGE,
} from './usersTypes';

const initialState: IUsersState = {
  userLanguage: 'ru',
};

export function usersReducer(
  state: IUsersState = initialState,
  action: UserActionsType,
): IUsersState {
  switch (action.type) {
    case USER_LANGUAGE_CHANGE:
      return { ...state, userLanguage: action.payload.userLanguage };

    default:
      return state;
  }
}
