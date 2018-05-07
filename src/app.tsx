import * as React from "react";
import { HashRouter, Route } from "react-router-dom";

import Welcome from "./Containers/Welcome";
import Systems from "./Containers/Systems";
import Transactions from "./Containers/Transactions";

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <HashRouter>
        <Routes />
      </HashRouter>
    );
  }
}

const Routes = () => (
  <div>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/Systems/:name" component={Systems} />
    <Route exact path="/Transactions/:name" component={Transactions} />
  </div>
);
