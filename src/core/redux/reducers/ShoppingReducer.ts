import { InitialState } from "../InitialState";
import * as shoppingActionTypes from "../actions/ShoppingActionTypes";
import { Item } from "../../models/Item";

export default function ProjectReducer(
  state = InitialState.shoppingItem,
  action: { payload: Item[]; loading: boolean; type: string }
) {
  switch (action.type) {
    case shoppingActionTypes.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
}
