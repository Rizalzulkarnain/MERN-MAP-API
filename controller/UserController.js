const bcrypt = require('bcryptjs');
const UserModel = require('../models/User');

const createRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json({
      success: true,
      data: user._id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });

    if (!user) {
      res.status(400).json({
        message: 'Invalid Credentials!, Wrong username or password',
      });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      res.status(400).json({
        message: 'Invalid Credentials!, Wrong password',
      });
    }

    res.status(200).json({
      success: true,
      username: user.username,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createRegister,
  userLogin,
};
