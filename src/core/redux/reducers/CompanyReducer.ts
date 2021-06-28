import { InitialState } from "../InitialState";
import * as companyActionTypes from "../actions/CompanyActionTypes";
import { Company } from "../../models/Company";

export default function ProjectReducer(
  state = InitialState.company,
  action: { payload: Company[]; loading: boolean; type: string }
) {
  switch (action.type) {
    case companyActionTypes.GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
}
