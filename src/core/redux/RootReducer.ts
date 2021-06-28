import { combineReducers } from "redux";
import CompanyReducer from "./reducers/CompanyReducer";
import ShoppingReducer from "./reducers/ShoppingReducer";
const rootReducer = combineReducers({
  company: CompanyReducer,
  shoppingItem: ShoppingReducer,
});

export default rootReducer;
