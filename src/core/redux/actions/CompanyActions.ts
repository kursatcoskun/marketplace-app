import { Company } from "../../models/Company";
import * as companyActionTypes from "./CompanyActionTypes";
import * as ShoppingService from "../../ShoppingService";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { Action } from "../../models/Action";
export function getAllCompaniesSuccess(
  res: Company[],
  loading: boolean
): Action<Company[]> {
  return {
    type: companyActionTypes.GET_COMPANIES,
    payload: res,
    loading: loading,
  };
}

export function getAllCompanies() {
  return (dispatch: Dispatch) =>
    ShoppingService.getCompanies()
      .then((res: AxiosResponse) =>
        dispatch(getAllCompaniesSuccess(res.data, false))
      )
      .catch((err) => {
        console.error(err);
      });
}
