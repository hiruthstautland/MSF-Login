const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { users, userNames } = mockData;
const data = JSON.stringify({ users, userNames });
const filepath = path.join(__dirname, "database.json");

fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log("Mock database created!");
});
