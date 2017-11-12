import {Component} from "@angular/core";
import {NgRedux, select} from "ng2-redux";
import {IAppState, ITodoItem} from "../store";
import {ADD_NEW_ITEM, DELETE_ALL, REMOVE_ITEM} from "../actions";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select('todo') todoList: ITodoItem[];
  @select(s => s.todo.length) count: number;
  lastUpdate: Date;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addNewItem(item) {
    this.lastUpdate = new Date();
    this.ngRedux.dispatch({type: ADD_NEW_ITEM, payload: item.value});
  }

  removeItem(item) {
    this.lastUpdate = new Date();
    this.ngRedux.dispatch({type: REMOVE_ITEM, payload: item});
  }

  deleteAll() {
    this.lastUpdate = new Date();
    this.ngRedux.dispatch({type: DELETE_ALL});
  }
}
