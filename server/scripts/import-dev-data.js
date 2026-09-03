const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Location = require("../models/Location");
const Exploration = require("../models/Exploration");
const Badge = require("../models/Badge");
const EarnedBadge = require("../models/EarnedBadge");
const User = require("../models/User");
const Visit = require("../models/Visit");
const ExplorationProgress = require("../models/ExplorationProgress");

// Connecting to database
dotenv.config({ path: `${__dirname}/../config.env` });

// console.log(process.env);

const DB = process.env.DB.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful for importing dev data!"))
  .catch((err) => {
    console.log("DB failed to connect for importing dev data!");
    console.log(err);
  });

// Location Data
const locations = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/locations.json`),
);

const importLocationData = async () => {
  try {
    // Retrieving explorations and creating an object that matches each explorationId with their _id
    const explorations = await Exploration.find();
    const explorationMap = {};

    explorations.forEach(
      (exp) => (explorationMap[exp.explorationId] = exp._id),
    );

    // Updating locations with exploration's _id
    const updatedLocations = locations.map((loc) => {
      const explorationMongoId = explorationMap[loc.explorationId];

      return { ...loc, explorationId: explorationMongoId };
    });

    await Location.create(updatedLocations);
    console.log("Locations data successfully updated and imported!");
  } catch (err) {
    console.log("Updating and importing locations data failed.");
    console.log(err);
  }
  process.exit();
};

const deleteLocationData = async () => {
  try {
    await Location.deleteMany();
    console.log("Locations data successfully deleted!");
  } catch (err) {
    console.log("Deleting locations data failed.");
    console.log(err);
  }
  process.exit();
};

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
    await Exploration.deleteMany();
    console.log("Explorations data successfully deleted!");
  } catch (err) {
    console.log("Explorations locations data failed.");
    console.log(err);
  }
  process.exit();
};

// // Badges Data
// const badges = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/badges.json`, "utf-8"),
// );

// const importBadgeData = async () => {
//   try {
//     await Badge.create(badges);
//     console.log("Badges data successfully imported!");
//   } catch (err) {
//     console.log("Importing Badges data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteBadgeData = async () => {
//   try {
//     await Badge.deleteMany();
//     console.log("Badges data successfully deleted!");
//   } catch (err) {
//     console.log("Deleting badges data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// // EarnedBadges Data
// const earnedBadges = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/earnedBadges.json`, "utf-8"),
// );

// const importEarnedBadgeData = async () => {
//   try {
//     await EarnedBadge.create(earnedBadges);
//     console.log("EarnedBadges data successfully imported!");
//   } catch (err) {
//     console.log("Importing EarnedBadges data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteEarnedBadgeData = async () => {
//   try {
//     await EarnedBadge.deleteMany();
//     console.log("EarnedBadges data successfully deleted!");
//   } catch (err) {
//     console.log("Deleting EarnedBadges data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// // Users Data
// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/users.json`, "utf-8"),
// );

// const importUsersData = async () => {
//   try {
//     await User.create(users);
//     console.log("Users data successfully imported!");
//   } catch (err) {
//     console.log("Importing users data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteUsersData = async () => {
//   try {
//     await User.deleteMany();
//     console.log("Users data successfully deleted!");
//   } catch (err) {
//     console.log("Deleting users data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// // Visit Data
// const visits = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/visit.json`, "utf-8"),
// );

// const importVisitData = async () => {
//   try {
//     await Visit.create(visit);
//     console.log("Visits data successfully imported!");
//   } catch (err) {
//     console.log("Importing visits data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteVisitData = async () => {
//   try {
//     await Visit.deleteMany();
//     console.log("Visits data successfully deleted!");
//   } catch (err) {
//     console.log("Deleting visits data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// // ExplorationProgress Data
// const explorationProgress = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/explorationProgress.json`, "utf-8"),
// );

// const importExplorationProgressData = async () => {
//   try {
//     await ExplorationProgress.create(explorationProgress);
//     console.log("ExplorationProgress data successfully imported!");
//   } catch (err) {
//     console.log("Importing ExplorationProgress data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

// const deleteExplorationProgressData = async () => {
//   try {
//     await ExplorationProgress.deleteMany();
//     console.log("ExplorationProgress data successfully deleted!");
//   } catch (err) {
//     console.log("Deleting ExplorationProgress data failed.");
//     console.log(err);
//   }
//   process.exit();
// };

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

  case "--importEarnedBadges":
    break;

  case "--deleteEarnedBadges":
    break;

  case "--importExplorationProgress":
    break;

  case "--deleteExplorationProgress":
    break;

  case "--importUsers":
    break;

  case "--deleteUsers":
    break;

  case "--importVisits":
    break;

  case "--deleteVisits":
    break;
}
