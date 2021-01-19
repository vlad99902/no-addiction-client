export const IN_ADDICTION_ON = "USER/IN_ADDICTION_ON";
export const IN_ADDICTION_OFF = "USER/IN_ADDICTION_OFF";
export const IN_ADDICTION_CHANGE = "USER/IN_ADDICTION_CHANGE";

export interface IUsersState {
  inAddiction: boolean;
}

interface inAddictionOn {
  type: typeof IN_ADDICTION_ON;
}
interface inAddictionOff {
  type: typeof IN_ADDICTION_OFF;
}
interface inAddictionChange {
  type: typeof IN_ADDICTION_CHANGE;
  payload: IUsersState;
}

export type UserActionsType =
  | inAddictionOn
  | inAddictionOff
  | inAddictionChange;
