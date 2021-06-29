import { InitialState } from "../InitialState";
import * as shoppingActionTypes from "../actions/ShoppingActionTypes";
import { Item } from "../../models/Item";
import { ShoppingCart } from "../../models/ShoppingCart";

export default function ProjectReducer(
  state = InitialState.shoppingItem,
  action: { payload: any; loading: boolean; type: string }
) {
  switch (action.type) {
    case shoppingActionTypes.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: action.loading,
      };
    case shoppingActionTypes.ADD_TO_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.find(
          (x) => x.item.slug === action.payload.item.slug
        )
          ? [
              ...state.shoppingCart.filter(
                (x) => x.item.slug !== action.payload.item.slug
              ),
              changeQuantity(
                state.shoppingCart,
                action.payload.item,
                action.payload.quantity
              ),
            ]
          : [...state.shoppingCart, action.payload],
        loading: false,
      };
    case shoppingActionTypes.REMOVE_TO_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.find(
          (x) => x.item.slug === action.payload.item.slug && x.quantity > 1
        )
          ? [
              ...state.shoppingCart.filter(
                (x) => x.item.slug !== action.payload.item.slug
              ),
              changeQuantity(
                state.shoppingCart,
                action.payload.item,
                action.payload.quantity
              ),
            ]
          : [
              ...state.shoppingCart.filter(
                (x) => x.item.slug !== action.payload.item.slug
              ),
            ],
        loading: false,
      };
    case shoppingActionTypes.LOW_TO_HIGH:
      return {
        ...state,
        items: state.items.length
          ? lowToHigh(action.payload, state.items)
          : state.items,
        loading: false,
      };
    case shoppingActionTypes.NEW_TO_OLD:
      return {
        ...state,
        items: state.items.length
          ? newToOld(action.payload, state.items)
          : state.items,
        loading: false,
      };
    case shoppingActionTypes.ADD_PRODUCT_TYPES:
      return {
        ...state,
        productTypes: action.payload,
        loading: false,
      };
    case shoppingActionTypes.APPLY_BRAND_FILTER:
      return {
        ...state,
        selectedBrandFilter: action.payload,
        loading: false,
      };
    case shoppingActionTypes.APPLY_TAG_FILTER:
      return {
        ...state,
        selectedTagFilter: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

function lowToHigh(type: string, items: Item[]): Item[] {
  return type === "low"
    ? items.slice().sort((prev, next) => (prev.price > next.price ? 1 : -1))
    : items.slice().sort((prev, next) => (prev.price > next.price ? -1 : 1));
}

function newToOld(type: string, items: Item[]): Item[] {
  return type === "new"
    ? items.slice().sort((prev, next) => (prev.added > next.added ? 1 : -1))
    : items.slice().sort((prev, next) => (prev.added > next.added ? -1 : 1));
}

function changeQuantity(
  shoppingCart: ShoppingCart[],
  item: Item,
  quantity: number
): ShoppingCart {
  const foundItemIndex = shoppingCart.findIndex(
    (cart) => cart.item.slug === item.slug
  );
  return {
    item: shoppingCart[foundItemIndex].item,
    quantity: shoppingCart[foundItemIndex].quantity + quantity,
    totalPrice:
      shoppingCart[foundItemIndex].item.price *
      (shoppingCart[foundItemIndex].quantity + quantity),
  };
}
