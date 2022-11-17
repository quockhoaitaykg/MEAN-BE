const userService = require("../services/UserService");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
require("dotenv").config();

exports.getAllUsers = async (req, res) => {
  try {
    const types = await userService.getAllUsers();
    res.json({ data: types, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await userService.getUserByEmail({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // //Encrypt user password
    // encryptedPassword = await bcrypt.hash(password, 10);

    const user = await userService.createUser(req.body);
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    res.json({ data: user, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const user = await userService.getUserByEmail({ email });

    
    if (password == user.password) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};