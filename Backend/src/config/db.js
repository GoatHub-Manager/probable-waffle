const mongoose = require("mongoose");

const connectedDB = async () =>{
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to db successfully")
  } catch (err) {
    console.log("Database connection error", err)
  }
};

module.exports = connectedDB;