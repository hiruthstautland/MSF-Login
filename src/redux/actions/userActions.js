import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

// action creaters

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}
export function updateUserSuccess(users) {
  return { type: types.UPDATE_USER_SUCCESS, users };
}
export function createUserSuccess(users) {
  return { type: types.CREATE_USER_SUCCESS, users };
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
export function saveUser(user) {
  return function (dispatch, getState) {
    return userApi
      .saveUser(user)
      .then((savedUser) => {
        user.id
          ? dispatch(updateUserSuccess(savedUser))
          : dispatch(createUserSuccess(savedUser));
      })
      .catch((error) => {
        throw error;
      });
  };
}
