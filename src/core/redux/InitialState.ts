import { Company } from "../models/Company";
import { Item } from "../models/Item";

export const InitialState = {
  company: {
    companies: [] as Company[],
  },
  shoppingItem: {
    items: [] as Item[],
  },
};
