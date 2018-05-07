import * as React from "react";
import { Link } from "react-router-dom";
import helloWorld from "../utils/api";
import { names } from "../utils/options";

export default class Systems extends React.Component<
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
        <h2>{name + " Systems"}</h2>
        {names.map((elm, i) => (
          <Link to={"/Transactions/" + elm} key={i}>
            <button>{elm}</button>
          </Link>
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
