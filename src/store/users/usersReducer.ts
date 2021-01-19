import { InAddiction } from "./../../containers/InAddiction";
import {
  IN_ADDICTION_CHANGE,
  IN_ADDICTION_OFF,
  IN_ADDICTION_ON,
  IUsersState,
  UserActionsType,
} from "./usersTypes";

const initialState: IUsersState = {
  inAddiction: true,
};

export function usersReducer(
  state = initialState,
  action: UserActionsType
): IUsersState {
  switch (action.type) {
    case IN_ADDICTION_ON:
      return { ...state, inAddiction: true };
    case IN_ADDICTION_OFF:
      return { ...state, inAddiction: false };
    case IN_ADDICTION_CHANGE:
      return { ...state };
    // return { ...state, inAddiction: action.payload };
    default:
      return state;
  }
}
