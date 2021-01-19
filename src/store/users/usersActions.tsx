import {
  IN_ADDICTION_CHANGE,
  IN_ADDICTION_OFF,
  IN_ADDICTION_ON,
  IUsersState,
  UserActionsType,
} from "./usersTypes";

export function inAddictionOn(): UserActionsType {
  return {
    type: IN_ADDICTION_ON,
  };
}
export function inAddictionOff(): UserActionsType {
  return {
    type: IN_ADDICTION_OFF,
  };
}
export function inAddictionChange(inAddiction: IUsersState): UserActionsType {
  return {
    type: IN_ADDICTION_CHANGE,
    payload: inAddiction,
  };
  // return (dispatch) => {
  //   dispatch({ type: IN_ADDICTION_CHANGE, payload: inAddiction });
  // };
}
