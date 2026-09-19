const express = require("express");
const Exploration = require("../models/Exploration");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAll = (Model, filter = {}) =>
  catchAsync(async (req, res, next) => {
    const queryFilter = typeof filter === "function" ? filter(req) : filter;

    // EXECUTE QUERY
    const features = new APIFeatures(Model.find(queryFilter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    console.log(req.query);
    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: { data: doc },
    });
  });

exports.getOne = (Model, filter = {}, popOptions) =>
  catchAsync(async (req, res, next) => {
    const queryFilter =
      typeof filter === "function" ? filter(req) : { _id: req.params.id };

    let query = Model.findOne(queryFilter);

    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    if (!doc) return next(new AppError("No document found with that ID.", 404));

    res.status(200).json({ status: "success", data: { data: doc } });
  });

exports.createOne = (Model, additionalData) =>
  catchAsync(async (req, res, next) => {
    let additionalDataOptions;

    if (additionalData) additionalDataOptions = additionalData(req);

    const doc = await Model.create({ ...req.body, ...additionalDataOptions });

    res.status(201).json({ status: "success", data: { data: doc } });
  });

exports.updateOne = (Model, filter = {}) =>
  catchAsync(async (req, res, next) => {
    const queryFilter =
      typeof filter === "function" ? filter(req) : { _id: req.params.id };

    const doc = await Model.findOneAndUpdate(queryFilter, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) return next(new AppError("No document found with that ID.", 404));

    res.status(200).json({ status: "success", data: { data: doc } });
  });

exports.deleteOne = (Model, filter = {}) =>
  catchAsync(async (req, res, next) => {
    const queryFilter =
      typeof filter === "function" ? filter(req) : { _id: req.params.id };

    const doc = await Model.findOneAndDelete(queryFilter);

    if (!doc) return next(new AppError("No document found with that ID.", 404));

    res.status(204).json({ status: "success", data: null });
  });
