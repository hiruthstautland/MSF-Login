const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { users, campaigns } = mockData;
const data = JSON.stringify({ users, campaigns });
const filepath = path.join(__dirname, "database.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock database created!");
});
