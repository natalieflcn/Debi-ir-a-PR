const express = require("express");
const Exploration = require("../models/Exploration");

exports.getAllExplorations = (req, res) => {
  console.log("GET route successful!");

  res.status(200).json({ status: "success" });
};

exports.getExploration = (req, res) => {};

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

exports.updateExploration = (req, res) => {};

exports.deleteExploration = (req, res) => {};
