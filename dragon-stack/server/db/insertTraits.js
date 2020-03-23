const pool = require("./databasePool.js");
const TRAITS = require("../data/traits.json");

TRAITS.forEach(trait => {
  const traitType = trait.type;
  const traitValue = trait.value;

  traitvalue.forEach(tv => {
    pool.query(
      'INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id',
      [traitType, tv]
    );
  });
});
