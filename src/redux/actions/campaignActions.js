import * as types from "./actionTypes";
import * as campaignApi from "../../api/campaignApi";

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
  return function (dispatch) {
    return (
      campaignApi
        .getCampaigns()
        // .then((campaigns) => console.log(campaigns))
        .then((campaigns) => dispatch(loadCampaignsSuccess(campaigns)))
        .catch((error) => {
          // TODO: handle error later, by dispatching an error that know what failed
          throw error;
        })
    );
  };
}
