const express = require("express");
const Exploration = require("../models/Exploration");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const User = require("../models/User");

exports.getAll = (Model, filter = {}) =>
  catchAsync(async (req, res, next) => {
    // const queryFilter = typeof filter === "function" ? filter(req) : filter;

    // // EXECUTE QUERY
    // const features = new APIFeatures(Model.find(queryFilter), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .paginate();

    const queryFilter = typeof filter === "function" ? filter(req) : filter;

    const features = new APIFeatures(Model.find(queryFilter), req.query)
      .filter()
      .sort()
      .limitFields();

    const total = await Model.countDocuments(features.query.getFilter());

    features.paginate();

    const doc = await features.query;

    // const total = await Model.countDocuments(queryFilter);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      total,
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
  catchAsync(async (req, res) => {
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
      // new: true,
      returnDocument: "after",
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
