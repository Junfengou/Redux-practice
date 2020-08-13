import store from "./Store";
//import * as actions from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Butterfly"));

unsubscribe();
store.dispatch(bugAdded("Dragonfly"));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));

console.log(store.getState());
