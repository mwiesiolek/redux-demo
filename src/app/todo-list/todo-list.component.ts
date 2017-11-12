import {Component} from "@angular/core";
import {NgRedux, select} from "ng2-redux";
import {IAppState, ITodoItem} from "../store";
import {ADD_NEW_ITEM, DELETE_ALL, READ_ALL} from "../actions";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select('todo') todoList: ITodoItem[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addNewItem(item) {
    console.log(item);
    this.ngRedux.dispatch({ type: ADD_NEW_ITEM });
  }

  deleteAll() {
    this.ngRedux.dispatch({ type: DELETE_ALL });
  }
}
