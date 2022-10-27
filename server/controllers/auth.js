const User = require("../models/user");

exports.authenticate = (req, res) => {
  const { username, password } = req.body;

  const user = User.findByUsername(username);
  if (!user) {
    return res.status(401).json({
      error: "Invalid credentials",
    });
  }
  if (user.password === password) {
    return res.json({
      token: User.createToken(user),
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    });
  }
};

exports.register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      error: "body requires username and password",
    });
  }

  const user = User.findByUsername(username);
  if (user) {
    return res.status(400).json({
      error: "User already exists",
    });
  } else {
    const { id, username: createdUsername } = User.createUser(
      username,
      password,
      "user"
    );
    res.status(201).json({
      message: "User created",
      user: {
        id,
        username: createdUsername,
      },
    });
  }
};
