const express = require("express");
const bodyParser = require("body-parser");
const GenerationsEngine = require("./models/generation/engine.class.js");
const dragonRouter = require("./api/routes/dragon.routes.js");

const app = express();
app.use(bodyParser.json());

//this(engine) must be above the app.use of dragonRouter since dragonRouter calls the engine...and it wont trigger  if the engine is not already started
const engine = new GenerationsEngine();
engine.start();

app.use("/dragon", dragonRouter);

module.exports = app;
