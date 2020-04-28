import * as types from "../actions/actionTypes";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_USER:
      return [...state, { ...action.user }];
    case types.LOAD_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
