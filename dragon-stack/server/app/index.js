require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const GenerationsEngine = require("./models/generation/engine.js");
const dragonRouter = require("./api/routes/dragon.routes.js");
const generationRouter = require("./api/routes/generation.routes.js");

const app = express();
app.use(bodyParser.json());

//this(engine) must be above the app.use of dragonRouter since dragonRouter calls the engine...and it wont trigger  if the engine is not already started
const engine = new GenerationsEngine();
engine.start();
app.locals.engine = engine; //allow the engines to become global in the global express app object, see app/api/routes/dragon for example

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ type: "error", message: err.message });
});

module.exports = app;
