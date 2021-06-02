const PinModel = require('../models/Pin');

const createPin = async (req, res) => {
  const newPin = new PinModel(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json({
      success: true,
      data: savedPin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getPins = async (req, res) => {
  try {
    const pins = await PinModel.find({});
    res.status(200).json({
      success: true,
      data: pins,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createPin,
  getPins,
};
