
import {INCREMENT} from "./actions";
import {tassign} from "tassign";
import {Map} from "immutable";

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

export function rootReducer(state: Map<string, any>, action): Map<string, any> {
  switch (action.type) {
    case INCREMENT:
      //return { counter: state.counter + 1, prop1: state.prop1, prop2: state.prop2 };
      // return Object.assign({}, state, { counter: state.counter + 1 });
        // return tassign(state, { counter: state.counter + 1});
          return state.set('counter', state.get('counter') + 1);
  }

  return state;
}
