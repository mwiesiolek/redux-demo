
import {INCREMENT} from "./actions";

export const INITIAL_STATE = {
  counter: 0,
  messaging: {
    newMessages: 5
  }
};

export interface IAppState {
  counter: number;
  messaging?: {
    newMessages: number;
  };
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
  }

  return state;
}
