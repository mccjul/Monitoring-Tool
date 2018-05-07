import * as React from "react";
import helloWorld from "./api";

export class App extends React.Component<undefined, { text: String }> {
  state = {
    text: ""
  };
  render() {
    return (
      <div>
        <h2>Welcome to React with Typescript!</h2>
        <button
          onClick={async () => {
            this.setState({ text: await helloWorld() });
          }}
        >
          push this
        </button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
