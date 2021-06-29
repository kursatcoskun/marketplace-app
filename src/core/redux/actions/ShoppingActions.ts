import * as shoppingActionTypes from "./ShoppingActionTypes";
import * as ShoppingService from "../../ShoppingService";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Action } from "../../models/Action";
import { Item } from "../../models/Item";
import { ShoppingCart } from "../../models/ShoppingCart";
import * as _ from "lodash";
import { Filter } from "../../models/filter";
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

export function addToCart(res: ShoppingCart): Action<ShoppingCart> {
  return {
    type: shoppingActionTypes.ADD_TO_CART,
    payload: res,
  };
}

export function removeToCart(res: ShoppingCart): Action<ShoppingCart> {
  return {
    type: shoppingActionTypes.REMOVE_TO_CART,
    payload: res,
  };
}

export function lowToHigh(type: string): Action<string> {
  return {
    type: shoppingActionTypes.LOW_TO_HIGH,
    payload: type,
  };
}

export function newToOld(type: string): Action<string> {
  return {
    type: shoppingActionTypes.LOW_TO_HIGH,
    payload: type,
  };
}

export function productTypes(res: string[]): Action<string[]> {
  return {
    payload: res,
    type: shoppingActionTypes.ADD_PRODUCT_TYPES,
  };
}

export function applyBrandFilter(payload: Filter): Action<Filter> {
  return {
    type: shoppingActionTypes.APPLY_BRAND_FILTER,
    payload,
  };
}

export function applyTagFilter(payload: Filter): Action<Filter> {
  return {
    type: shoppingActionTypes.APPLY_TAG_FILTER,
    payload,
  };
}

export function getAllShoppingItems() {
  return (dispatch: Dispatch) =>
    ShoppingService.getItems()
      .then((res: AxiosResponse) => {
        dispatch(getAllItemsSuccess(res.data, false));
        dispatch(
          productTypes(_.uniq(res.data.map((item: Item) => item.itemType)))
        );
      })
      .catch((err) => {
        console.error(err);
      });
}
