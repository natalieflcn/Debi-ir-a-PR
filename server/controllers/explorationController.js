const express = require("express");

exports.getAllExplorations = (req, res) => {
  console.log("GET route successful!");

  res.status(200).json({ status: "success" });
};

exports.getExploration = (req, res) => {};

exports.createExploration = (req, res) => {
  console.log("POST route successful!");

  res.status(200).json({ status: "success" });
};

exports.updateExploration = (req, res) => {};

exports.deleteExploration = (req, res) => {};
