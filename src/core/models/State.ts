import { Company } from "./Company";
import { Filter } from "./filter";
import { Item } from "./Item";
import { ShoppingCart } from "./ShoppingCart";

export interface State {
  company: {
    companies: Company[];
  };
  shoppingItem: {
    items: Item[];
    shoppingCart: ShoppingCart[];
    productTypes: string[];
    selectedProductType: string;
    selectedBrandFilter: Filter;
    selectedTagFilter: Filter;
  };
}
