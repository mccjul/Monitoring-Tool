import * as React from "react";
import helloWorld from "../utils/api";
import { transaction_info } from "../utils/options";

export default class Transactions extends React.Component<
  undefined,
  { text: String }
> {
  state = {
    text: ""
  };
  render() {
    const { name } = this.props.match.params;
    return (
      <div>
        <h2>{name + " Transactions"}</h2>
        {transaction_info(this.props.match.params.name).map((elm, i) => (
          <div key={i}>
            <button>{elm}</button>
          </div>
        ))}
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
