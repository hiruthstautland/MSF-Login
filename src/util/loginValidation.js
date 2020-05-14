export async function validateLogin(username, secret) {
  const resp = await fetch(`/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, secret }),
  });
  console.log(await resp.body);
  const { token } = resp.body;
  console.log(token);
  localStorage.setItem("token", token);
  //   await resp.json();
}

export async function checkLogin() {
  const resp = await fetch(`${API_LOGIN}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": localStorage.getItem("token"),
    },
  });
  return resp.status === 200;
}
