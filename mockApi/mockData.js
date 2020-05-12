const users = [
  {
    id: 1,
    name: "Admin",
    userRole: "Admin",
    team: "LSP",
    campaigns: 0,
  },
];

const campaigns = [
  { id: 0, name: "Admin" },
  { id: 1, name: "Moria" },
  { id: 3, name: "Ebola" },
  { id: 4, name: "Access Campaign" },
];

const newUser = {
  id: null,
  name: "",
  userRole: "",
  team: "",
  campaigns: null,
};

module.exports = {
  users,
  campaigns,
  newUser,
};
