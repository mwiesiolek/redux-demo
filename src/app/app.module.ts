import {BrowserModule} from "@angular/platform-browser";
import {NgModule, isDevMode} from "@angular/core";
import {AppComponent} from "./app.component";
import {NgReduxModule, NgRedux, DevToolsExtension} from "ng2-redux";
import {IAppState, rootReducer, INITIAL_STATE} from "./store";
import {TodoListComponent} from "./todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  //NgRedux<IAppState>
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {

    let enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    // ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE));
  }
}
