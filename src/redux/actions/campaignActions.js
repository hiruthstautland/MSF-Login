import * as types from "./actionTypes";
import * as campaignApi from "../../api/campaignApi";
import { beginApiCall } from "./apiStatusActions";

// TODO: add create courses
// export function createCampaign(user) {
//   return { type: types.CREATE_USER, user };
// }

// action creater
export function loadCampaignsSuccess(campaigns) {
  return { type: types.LOAD_CAMPAIGNS_SUCCESS, campaigns };
}

// TODO: Write corresponding error action for each thunk. As errors could/should be handled uniqly based on type of error.

// thunk
export function loadCampaigns() {
  return async function (dispatch) {
    dispatch(beginApiCall());
    try {
      const campaigns = await campaignApi.getCampaigns();
      return dispatch(loadCampaignsSuccess(campaigns));
    } catch (error) {
      throw error;
    }
  };
}
