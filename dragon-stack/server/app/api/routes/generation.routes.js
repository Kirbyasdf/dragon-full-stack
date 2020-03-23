const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
  res.json({ generation: req.app.locals.engine.generation });
});

module.exports = router;
