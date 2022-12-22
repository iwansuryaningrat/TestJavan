import express from "express";
const app = express();

import "dotenv/config";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import db from "./src/models/index.js";
db.sequelize.sync({ force: true }).then(() => {
  console.log("Sync database");
});

// set port, listen for requests
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
