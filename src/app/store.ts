import {INCREMENT, ADD_NEW_ITEM, DELETE_ALL, REMOVE_ITEM} from "./actions";
import {tassign} from "tassign";

export const INITIAL_STATE = {
  counter: 0,
  messaging: {
    newMessages: 5
  },
  todo: [],
  idGenerator: 1
};

export interface IAppState {
  counter: number;
  messaging?: {
    newMessages: number;
  };
  todo: ITodoItem[];
  idGenerator: number;
}

export interface ITodoItem {
  id: number;
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
    case REMOVE_ITEM:
      return removeItem(state, action.payload);
  }

  return state;
}

function removeItem(state, payload: ITodoItem) {
  let item = state.todo.find(i => i.id == payload.id);
  let index = state.todo.indexOf(item);

  let beforeItems = state.todo.slice(0, index);
  let afterItems = state.todo.slice(index + 1);

  let newArray = [...beforeItems, ...afterItems];

  return tassign(state, {
    todo: newArray
  });
}

/*function updateItem(state, payload: ITodoItem) {
  let item = state.todo.find(i => i.id == payload.id);
  let index = state.todo.indexOf(item);

  let beforeItems = state.todo.slice(0, index);
  let afterItems = state.todo.slice(index + 1);

  let newArray = [...beforeItems, payload, ...afterItems];

  return tassign(state, {
    todo: newArray
  });
}*/

function addNewItem(state: IAppState, payload: string) {

  return tassign(state, {
    idGenerator: state.idGenerator + 1,
    todo: state.todo.concat({
      id: state.idGenerator,
      content: payload,
      created: new Date()
    })
  });
}

function deleteAll(state: IAppState) {
  return tassign(state, { todo: [] });
}
