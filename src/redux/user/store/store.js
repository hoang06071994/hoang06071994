import { combineReducers, createStore } from "redux";
import reducer from "../reducers/reducers";

const rootReducers = combineReducers({
  reducer
});

const store = createStore(rootReducers);

export default store;
