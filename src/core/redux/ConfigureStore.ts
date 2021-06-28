import { applyMiddleware, compose, createStore } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

export default function configureStore(initialState: any) {
  const composeEnhancers = compose;

  const middlewares = composeEnhancers(applyMiddleware(thunk));

  return createStore(RootReducer, initialState, middlewares);
}
