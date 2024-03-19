const express = require("express");
const jwt = require("jsonwebtoken");
const sequelize = require("./DataBase/config");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

// Middleware to parse request body as JSON
app.use(express.json());

const loginRoute = require("./routes/loginRoute");
const UserRoute = require("./Routes/UserRoutes");

// Routes
app.use("/", loginRoute);
app.use("/", UserRoute);

sequelize
  .authenticate()
  .then(() => console.log("DB is connected"))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

(async () => {
  try {
    await sequelize.sync();
    // await roles.sync();
    console.log("Sequelize synchronization completed.");
  } catch (error) {
    console.error("Sequelize synchronization failed:", error.message);
  }
})();

module.exports = app;
