import * as React from "react";
import { Link } from "react-router-dom";
import { names, transaction_info } from "../utils/options";

export default class Welcome extends React.Component<
  undefined,
  { options: Array<String> }
> {
  state = {
    options: []
  };
  render() {
    console.log(transaction_info("DollarCity", "ECC"));
    return (
      <div>
        <h2>MONI TOOL</h2>
        {names.map((elm, i) => (
          <Link to={"/Systems/" + elm} key={i}>
            <button>{elm}</button>
          </Link>
        ))}
      </div>
    );
  }
}
