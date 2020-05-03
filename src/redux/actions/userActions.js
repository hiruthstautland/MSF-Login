import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export function createUser(user) {
  return { type: types.CREATE_USER, user };
}

// action creater
export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

// TODO: Write corresponding error action for each thunk. As errors could/should be handled uniqly based on type of error.

// thunk
export function loadUsers() {
  return async function (dispatch) {
    try {
      const users = await userApi.getUsers();
      dispatch(loadUsersSuccess(users));
    } catch (error) {
      // TODO: handle error later, by dispatching an error that know that it has failed
      throw error;
    }
  };
}
