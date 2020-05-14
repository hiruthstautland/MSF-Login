/*
Validation/Customization: https://github.com/typicode/json-server/issues/266
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/
require("dotenv").config();

const jsonServer = require("json-server");
const expressServer = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "database.json"));
const port = process.env.PORT;
const secret = process.env.SECRET;
const { authenticate } = require("./Middleware/authenticate");
const jsonWebToken = require("jsonwebtoken");

// You can override some defaults by passing a config object to jsonServer.defaults();
const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});

expressServer.use(middlewares);

expressServer.use(jsonServer.bodyParser);

// TODO:add error handler -> req, res, next, err

// custom delay on all request
expressServer.use((req, res, next) => {
  setTimeout(next, 20);
});

expressServer.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// server.post("/login", async (req, res, next) => {
//   try {
//     const result = await
//   } catch (error) {
//     next(error);
//   }
// });
const server = jsonServer.create();
server.post("/session", async (req, res, next) => {
  const { username, password } = req.body;
  const user = await getUserByHandle(username);

  try {
    if (!user) {
      return res.status(401).send({ error: "not in database" });
    }

    if (user.password != password) {
      return res.status(401).send({ error: "Wrong password" });
    }

    const token = jsonWebToken.sign(
      {
        id: user.id,
        username: user.username,
      },
      new Buffer(secret, "base64")
    );

    res.send({
      token: token,
    });
  } catch (error) {
    next(error.message);
  }
});

server.get("/session", authenticate, function (req, res) {
  res.send({
    message: "You are authenticated",
  });
});

// post
server.post("/users", async (req, res, next) => {
  const error = validateUserInfo(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = await createSlug(req.body.name);
    req.body.email = createEmail(req.body.slug);
    next();
  }
});

// default router
server.use(router);

expressServer.use("api", server);

expressServer.listen(port, () => {
  console.log(`Mock(JSON) Server is running on port: ${port}`);
});

// function

// using regEx to return a url friendly slug
function createSlug(name) {
  return name
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}
function createEmail(slug) {
  return `${slug}@MSFNORWAY.com`;
}

function validateUserInfo(user) {
  if (!user.name) return `Name is required!`;
  // if (!user.email) return `Email is required!`;
  if (!user.userRole) return `Role is required!`;
  return ``;
}
