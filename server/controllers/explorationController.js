const express = require("express");
const Exploration = require("../models/Exploration");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllExplorations = async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Exploration.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const explorations = await features.query;

    // SEND RESPONSE
    res.status(200).json({ status: "success", data: { explorations } });
  } catch (err) {
    console.log(err);

    res
      .status(404)
      .json({ status: "fail", message: "Failed to retrieve explorations." });
  }
};

exports.getExploration = async (req, res) => {
  try {
    const exploration = await Exploration.findOne({
      _id: req.params.id,
    });

    res.status(200).json({ status: "success", data: { exploration } });
  } catch (err) {
    console.log(req.params);
    console.log(err);

    res
      .status(404)
      .json({ status: "fail", message: "Failed to retrieve exploration." });
  }
};

exports.createExploration = async (req, res) => {
  try {
    const newExploration = await Exploration.create(req.body);

    res
      .status(201)
      .json({ status: "success", data: { exploration: newExploration } });
  } catch (err) {
    console.log(err);

    res
      .status(400)
      .json({ status: "fail", message: "Failed to create exploration." });
  }
};

exports.updateExploration = async (req, res) => {
  try {
    console.log(req.params);
    const exploration = await Exploration.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true },
    );
    console.log(exploration);
    res.status(200).json({ status: "success", data: { exploration } });
  } catch (err) {
    console.log(err);

    res
      .status(400)
      .json({ status: "fail", message: "Failed to create exploration." });
  }
};

exports.deleteExploration = async (req, res) => {
  try {
    await Exploration.findOneAndDelete({
      _id: req.params.id,
    });

    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    console.log(err);

    res
      .status(400)
      .json({ status: "fail", message: "Failed to create exploration." });
  }
};
