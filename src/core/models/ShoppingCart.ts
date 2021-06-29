import { Item } from "./Item";

export interface ShoppingCart {
  quantity: number;
  item: Item;
  totalPrice?: number;
}
