import { Company } from "../models/Company";
import { Item } from "../models/Item";
import { ShoppingCart } from "../models/ShoppingCart";
import { State } from "../models/State";
import { Filter } from "../models/filter";

export const InitialState: State = {
  company: {
    companies: [] as Company[],
  },
  shoppingItem: {
    items: [] as Item[],
    shoppingCart: [] as ShoppingCart[],
    productTypes: [] as string[],
    selectedProductType: "",
    selectedBrandFilter: {} as Filter,
    selectedTagFilter: {} as Filter,
  },
};
