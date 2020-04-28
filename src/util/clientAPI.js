const pgUrl = "";

async function getRegisteredUsers() {
  let response = fetch(`${pgUrl}/users`);
  let users = await response.json();
  return users;
}
async function registerUser() {
  let response = fetch(`${pgUrl}/user`);
  let user = await response.json();
  return user;
}
