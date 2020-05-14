const API_LOGIN = process.env.API_LOGIN;

export async function validateLogin(username, secret) {
  const resp = await fetch(`${API_LOGIN}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, secret }),
  });
  const { token } = resp.body;
  console.log(token);
  console.log(resp.body);
  localStorage.setItem("token", token);
  //   await resp.json();
}

export async function checkLogin() {
  const resp = await fetch(`${API_LOGIN}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": localStorage.getItem("secret"),
    },
  });
  return resp.status === 200;
}
