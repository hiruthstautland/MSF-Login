/*
Validation/Customization: https://github.com/typicode/json-server/issues/266
ID: https://github.com/typicode/json-server/issues/613#issuecomment-325393041
Relevant source code: https://github.com/typicode/json-server/blob/master/src/cli/run.js
*/
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "database.json"));
const port = 3001;

// You can override some defaults by passing a config object to jsonServer.defaults();
const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});

server.use(middlewares);

server.use(jsonServer.bodyParser);

// TODO:add error handler -> req, res, next, err

// custom delay on all request
server.use((req, res, next) => {
  setTimeout(next, 2000);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// post
server.post("/users", async (req, res, next) => {
  const error = validateUser(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    console.log("Post ", req.body);
    req.body.slug = await createSlug(req.body.name);
    req.body.email = createEmail(req.body.slug);
    next();
  }
});

// default router
server.use(router);

server.listen(port, () => {
  console.log(`Mock(JSON) Server is running on port: ${port}`);
});

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

function validateUser(user) {
  if (!user.name) return `Name is required!`;
  // if (!user.email) return `Email is required!`;
  if (!user.userRole) return `Role is required!`;
  return ``;
}
