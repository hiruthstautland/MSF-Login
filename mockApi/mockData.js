const users = [
  {
    id: 1,
    name: "Mina",
    email: "mina@leger.uten.grenser.no",
    userRole: "Medarbeider-int",
  },
  {
    id: 2,
    name: "Mina D",
    email: "mina@MSF.no",
    userRole: "Medarbeider-eks",
  },
  {
    id: 3,
    name: "Mina D L",
    email: "mina@legerutengrenser.no",
    userRole: "Medarbeider-int",
  },
  {
    id: 4,
    name: "Mina D Lundevåg",
    email: "mina@MSF.com",
    userRole: "Admin",
  },
];

const userNames = [
  { id: 1, name: "Mina" },
  { id: 2, name: "Mina D" },
  { id: 3, name: "Mina D Lundevåg" },
];

const newUser = {
  id: null,
  name: "",
  email: "",
  userRole: "",
};

module.exports = {
  users,
  newUser,
  userNames,
};
