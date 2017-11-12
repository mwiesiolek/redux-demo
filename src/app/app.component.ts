import { Component } from '@angular/core';
import {NgRedux, select} from "ng2-redux";
import {IAppState} from "./store";
import {INCREMENT} from "./actions";
import {Map} from "immutable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select('counter') count: number;
  // messaging.newMessages
  @select(['messaging', 'newMessages']) newMessages;
  @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
