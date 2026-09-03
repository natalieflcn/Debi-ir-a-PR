const express = require("express");
const Exploration = require("../models/Exploration");

exports.getAllExplorations = async (req, res) => {
  try {
    // BUILD QUERY
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);

    const query = Exploration.find(queryObj);

    // EXECUTE QUERY
    const explorations = await query;

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
      explorationId: req.params.explorationId,
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
    const exploration = await Exploration.findOneAndUpdate(
      { explorationId: req.params.explorationId },
      req.body,
      { new: true, runValidators: true },
    );

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
      explorationId: req.params.explorationId,
    });

    res.status(204).json({ status: "success", data: null });
  } catch (err) {
    console.log(err);

    res
      .status(400)
      .json({ status: "fail", message: "Failed to create exploration." });
  }
};
