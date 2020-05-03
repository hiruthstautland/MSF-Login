const users = [
  {
    id: 1,
    name: "Mina",
    userRole: "Medarbeider-int",
    team: "LSP",
    campaigns: 1,
  },
  {
    id: 2,
    name: "Mina D",
    userRole: "Medarbeider-eks",
    team: "LSP",
    campaigns: 4,
  },
  {
    id: 3,
    name: "Mina D L",
    userRole: "Medarbeider-int",
    team: "LSP",
    campaigns: 4,
  },
  {
    id: 4,
    name: "Mina D Lundevåg",
    userRole: "Admin",
    team: "LSP",
    campaigns: 3,
  },
  {
    id: 5,
    name: "Mina D Lundevåg",
    userRole: "Admin",
    team: "LSP",
    campaigns: 3,
  },
  {
    id: 6,
    name: "Mina D Lundevåg",
    userRole: "Admin",
    team: "LSP",
    campaigns: 3,
  },
  {
    id: 7,
    name: "Mina D Lundevåg",
    userRole: "Admin",
    team: "LSP",
    campaigns: 3,
  },
  {
    id: 8,
    name: "Mina D Lundevåg",
    userRole: "Admin",
    team: "LSP",
    campaigns: 3,
  },
];

const campaigns = [
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
