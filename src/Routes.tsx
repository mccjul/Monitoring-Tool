import * as React from "react";
import { Route } from "react-router-dom";
import { connect, bindActionCreators } from "react-redux";

import Welcome from "./Containers/Welcome";
import Systems from "./Containers/Systems";
import Transactions from "./Containers/Transactions";

const Routes = () => (
  <div>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/Systems/:name" component={Systems} />
    <Route exact path="/Transactions/:name" component={Transactions} />
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Routes);
