const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ExplorationProgress = require("../models/ExplorationProgress");
const Exploration = require("../models/Exploration");

const User = require("../models/User");



// Connecting to database
dotenv.config({ path: `${__dirname}/../config.env` });



const DB = process.env.DB.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful for importing dev data!"))
  .catch((err) => {
    console.log("DB failed to connect for importing dev data!");
    console.log(err);
  });


// Exploration Data
const explorations = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/explorations.json`, "utf-8"),
);

const importExplorationData = async () => {
  try {
    await Exploration.create(explorations);
    console.log("Explorations data successfully imported!");
  } catch (err) {
    console.log("Importing explorations data failed.");
    console.log(err);
  }
  process.exit();
};

const deleteExplorationData = async () => {
  try {
    await Exploration.collection.drop();
    console.log("Explorations collection successfully dropped and deleted!");
  } catch (err) {
    console.log("Deleting explorations data failed.");
    console.log(err);
  }
  process.exit();
};


// Users Data
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/users.json`, "utf-8"),
);

const importUsersData = async () => {
  try {
    await User.create(users);
    console.log("Users data successfully imported!");
  } catch (err) {
    console.log("Importing users data failed.");
    console.log(err);
  }
  process.exit();
};

const deleteUsersData = async () => {
  try {
    await User.collection.drop();
    console.log("Users collection successfully dropped and deleted!");
  } catch (err) {
    console.log("Deleting users data failed.");
    console.log(err);
  }
  process.exit();
};

// // ExplorationProgress Data
const explorationProgress = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/explorationProgress.json`, "utf-8"),
);

const importExplorationProgressData = async () => {
  try {
    await ExplorationProgress.create(explorationProgress);
    console.log("ExplorationProgress data successfully imported!");
  } catch (err) {
    console.log("Importing ExplorationProgress data failed.");
    console.log(err);
  }
  process.exit();
};

const deleteExplorationProgressData = async () => {
  try {
    await ExplorationProgress.deleteMany();
    console.log("ExplorationProgress data successfully deleted!");
  } catch (err) {
    console.log("Deleting ExplorationProgress data failed.");
    console.log(err);
  }
  process.exit();
};

switch (process.argv[2]) {
  case "--importLocations":
    importLocationData();
    break;

  case "--deleteLocations":
    deleteLocationData();
    break;

  case "--importExplorations":
    importExplorationData();
    break;

  case "--deleteExplorations":
    deleteExplorationData();
    break;

  case "--importBadges":
    break;

  case "--deleteBadges":
    break;

  case "--importBadgeCollections":
    break;

  case "--deleteBadgeCollections":
    break;

  case "--importExplorationProgress":
    importExplorationProgressData();
    break;

  case "--deleteExplorationProgress":
    deleteExplorationProgressData();
    break;

  case "--importUsers":
    importUsersData();
    break;

  case "--deleteUsers":
    deleteUsersData();
    break;

  case "--importVisits":
    break;

  case "--deleteVisits":
    break;
}
