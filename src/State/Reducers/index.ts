import { combineReducers } from "redux";
import Selection from "./Selection";

export default combineReducers<{}, any>({
  selection: Selection
});
