const crypto = require("crypto");
const jwt = require("jsonwebtoken");

let users = [
  {
    id: crypto.randomUUID(),
    username: "david",
    password: "grillkorv",
    role: "admin",
  },
];
// role: user, admin
exports.createUser = (username, password, role) => {
  const id = crypto.randomUUID();
  const user = { id, username, password, role };
  users.push(user);
  return user;
};

exports.deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};

exports.findUser = (id) => {
  return users.find((user) => user.id === id);
};

exports.findByUsername = (username) => {
  return users.find((user) => user.username === username);
};

exports.listUsers = (userId) => {
  return users.filter((user) => user.userId === userId);
};

exports.createToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, "grillkorv");
};

exports.verifyToken = (token) => {
  return jwt.verify(token, "grillkorv");
};
