import * as React from "react";
import Exe from "./util";

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
        <button onClick={() => Exe()}>push this</button>
      </div>
    );
  }
}
