const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generateSign } = require("../middlewares/jwt");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id, user.email);
      return res.status(200).json({ token, user });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = null;
    return res.status(200).json(token);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.register = async (req, res) => {
  try {
    const data = req.body;
    const user = new User(data);
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.checksession = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.user._id;
    const data = req.body;
    const user = new User(data);
    user._id = id;
    await User.findByIdAndUpdate(id, user);
    return res.status(200).json({ message: "User updated" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
