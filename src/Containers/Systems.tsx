import * as React from "react";
import { Link } from "react-router-dom";
import helloWorld from "../utils/api";
import { systems } from "../utils/options";

export default class Systems extends React.Component<
  { match: { params: { name: String } } },
  { text: String }
> {
  state = {
    text: ""
  };
  render() {
    console.log(this.props);
    const { name } = this.props.match.params;
    console.log(name);
    return (
      <div>
        <h2>{name + " Systems"}</h2>
        {systems(name).map((elm, i) => (
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
        <Link to={"/"}>
          <button>Back</button>
        </Link>
        <p>{this.state.text}</p>
      </div>
    );
  }
}
