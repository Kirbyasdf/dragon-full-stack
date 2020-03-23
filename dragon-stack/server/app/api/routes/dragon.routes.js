const { Router } = require("express");
const DragonTable = require("../../models/dragon/dragon.table.js");

const router = new Router();

router.get("/", async (req, res, next) => {
  const dragon = req.app.locals.engine.generation.newDragon();
  //^ see index.js for explanation of app.locals
  try {
    const dragonId = await DragonTable.storeDragon(dragon);
    dragon.dragonId = dragonId;
    res.json(dragon);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
