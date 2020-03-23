const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
  res.json({ dragon: engine.generation.newDragon() });
});

module.exports = router;
