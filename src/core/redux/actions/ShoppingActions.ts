import { Company } from "../../models/Company";
import * as shoppingActionTypes from "./ShoppingActionTypes";
import * as ShoppingService from "../../ShoppingService";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Action } from "../../models/Action";
import { Item } from "../../models/Item";
export function getAllItemsSuccess(
  res: Item[],
  loading: boolean
): Action<Item[]> {
  return {
    type: shoppingActionTypes.GET_ALL_ITEMS,
    payload: res,
    loading: loading,
  };
}

export function getAllShoppingItems() {
  return (dispatch: Dispatch) =>
    ShoppingService.getItems()
      .then((res: AxiosResponse) =>
        dispatch(getAllItemsSuccess(res.data, false))
      )
      .catch((err) => {
        console.error(err);
      });
}
