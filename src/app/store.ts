import {INCREMENT, ADD_NEW_ITEM, DELETE_ALL} from "./actions";
import {tassign} from "tassign";

export const INITIAL_STATE = {
  counter: 0,
  messaging: {
    newMessages: 5
  },
  todo: []
};

export interface IAppState {
  counter: number;
  messaging?: {
    newMessages: number;
  };
  todo: ITodoItem[];
}

export interface ITodoItem {
  content: string;
  created: Date;
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT:
      //return { counter: state.counter + 1, prop1: state.prop1, prop2: state.prop2 };
      // return Object.assign({}, state, { counter: state.counter + 1 });
      return tassign(state, {counter: state.counter + 1});
    // return state.set('counter', state.get('counter') + 1);
    case ADD_NEW_ITEM:
      return addNewItem(state, action.payload);
    case DELETE_ALL:
      return deleteAll(state);
  }

  return state;
}

function addNewItem(state: IAppState, payload: string) {
  return tassign(state, {todo: state.todo.concat({content: payload, created: new Date()})});
}

function deleteAll(state: IAppState) {
  return state;
}
