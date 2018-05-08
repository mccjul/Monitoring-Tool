import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider, applyMiddleware, createStore } from "react-redux";

import reducers from "./State/Reducers";
import Routes from "./Routes";
import thunkMiddleware = require("redux-thunk");

const store = createStore(reducers, {}, applyMiddleware(thunkMiddleware));

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    );
  }
}

// const Routes = () => (
//   <div>
//     <Route exact path="/" component={Welcome} />
//     <Route exact path="/Systems/:name" component={Systems} />
//     <Route exact path="/Transactions/:name" component={Transactions} />
//   </div>
// );
