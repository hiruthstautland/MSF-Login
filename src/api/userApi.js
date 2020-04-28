import { handleResponse, handleError } from "./apiUtils";
const baseUrl = `${process.env.API_URL}/users/`;

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveUser(user) {
  return fetch(baseUrl + (user.id || ""), {
    method: user.id ? "PUT" : "POST", // checks if user exist and edits data, if not creates a new user
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function delteUser(userId) {
  return fetch(baseUrl + userId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
