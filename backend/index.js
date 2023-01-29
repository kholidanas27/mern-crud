/* eslint-disable no-undef */
// let express = require("express");
// let mongoose = require("mongoose");
// let cors = require("cors");
// let bodyParser = require("body-parser");

// Express Route
// const studentRoute = require("../backend/routes/student.route");

// // Connecting mongoDB Database
// mongoose
//   .connect("mongodb://127.0.0.1:27017/students_db")
//   .then((x) => {
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//     );
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo", err.reason);
//   });
// const app = express();
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(cors());
// app.use("/students", studentRoute);

// // PORT
// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
//   console.log("Connected to port " + port);
// });
// // 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import studentRoute from './routes/studentRoute.js';

const app = express();
mongoose.connect("mongodb://localhost:27017/students_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(studentRoute);

app.listen(5000, () => console.log("Server up and running..."));
