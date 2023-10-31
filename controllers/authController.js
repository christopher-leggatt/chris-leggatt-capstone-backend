const knex = require("../db");
const authModel = require("../models/authModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createAuthsLogin = async (req, res) => {
  console.log(
    "🚀 ~ file: authController.js:7 ~ exports.createAuthsLogin= ~ req.body:",
    req.body
  );
  const { login, password } = req.body;

  try {
    const user = await authModel.findUserByLogin(login);
    console.log(
      "🚀 ~ file: authController.js:11 ~ exports.createAuthsLogin= ~ user:",
      user
    );
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const isPasswordValid = await authModel.comparePassword(
      password,
      user.password
    );
    console.log(
      "🚀 ~ file: authController.js:19 ~ exports.createAuthsLogin= ~ isPasswordValid:",
      isPasswordValid
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (user && isPasswordValid) {
      const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '120m' }); 
      const refreshToken = jwt.sign({ id: user.id, role: user.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); 
  
      await authModel.storeRefreshToken(user.id, refreshToken);
  
      res.status(200).json({ accessToken, refreshToken, userId: user.id, role: user.role });
    }
    // const token = jwt.sign(
    //   { userId: user.id, role: user.role },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1h" }
    // );
    // res.status(200).json({ token, userId: user.id, role: user.role });
  } catch (err) {
    res.status(400).send(`Error logging in: ${err}`);
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(403).json({ error: 'Refresh token is required!' });
  }

  const validToken = await authModel.validateRefreshToken(refreshToken);
  if (!validToken) {
    return res.status(403).json({ error: 'Invalid refresh token!' });
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token is not valid!' });

    const accessToken = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '120m' });
    res.json({ accessToken });
  });
};

exports.logout = async (req, res) => {
  const { refreshToken } = req.body;
  await authModel.revokeRefreshToken(refreshToken);
  res.status(200).json({ message: 'Logged out successfully' });
};



exports.showUsersProfile = async (req, res) => {
  try {
    const { userId } = req;
    const userProfile = await authModel.showUserProfile(userId);

    res.status(200).json({ userProfile });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server Error: ${err}`);
  }
};

// exports.showUsersProfile = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await authModel.showUserProfile(id);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).send(`Error getting User ${id}: ${err}`);
//   }
// };

exports.editUsersProfile = async (req, res) => {
  const { userId, body } = req;
  try {
    const user = await authModel.editUserProfile(userId, body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).send(`Error updating user ${userId}: ${err}`);
  }
};

exports.deleteUsersProfile = async (req, res) => {
  const { userId } = req;
  try {
    const user = await authModel.deleteUserItem(userId);
    res.status(204).json(user);
  } catch (err) {
    res.status(400).send(`Error deleting User ${userId}: ${err}`);
  }
};

exports.postAuthsSignup = async () => {
  try {
  } catch (err) {}
};
