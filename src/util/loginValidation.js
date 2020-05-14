const API_LOGIN_VALIDATION = process.env.API_LOGIN;

async function validateLogin(username, secret) {
  const resp = await fetch(`${API_LOGIN}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, secret }),
  });
  const { secret } = resp.body;

  localStorage.setItem("secret", secret);
  //   await resp.json();
}

export async function checkLogin() {
  const resp = await fetch(`${API_LOGIN}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": localStorage.getItem("secret", secret),
    },
  });
  return resp.status === 200;
}
