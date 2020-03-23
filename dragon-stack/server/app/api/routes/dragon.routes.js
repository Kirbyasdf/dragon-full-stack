const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
  res.json({ dragon: req.app.locals.engine.generation.newDragon() });
});

//^ see index.js for explanation of app.locals

module.exports = router;
