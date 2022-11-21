const mongodb = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connectingToMongo = async () => {
  try {
    await mongodb.connect(MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

module.exports = connectingToMongo;
