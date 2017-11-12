import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {NgReduxModule, NgRedux} from "ng2-redux";
import {IAppState, rootReducer, INITIAL_STATE} from "./store";
import {TodoListComponent} from "./todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //NgRedux<IAppState>
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
    // ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
