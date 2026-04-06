require("dotenv").config();
const app = require('./src/app');
const connectedDB = require("./src/config/db");


const startServer = async () => {
  try {
    await connectedDB(); 

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });

  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();