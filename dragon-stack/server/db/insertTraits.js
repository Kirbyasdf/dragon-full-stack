const pool = require("./databasePool.js");
const TRAITS = require("../data/traits.json");

(async () => {
  try {
    for (const trait of TRAITS) {
      const traitType = trait.type;
      const traitValues = trait.values;

      for (const tValue of traitValues) {
        const resData = await pool.query(
          'INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id',
          [traitType, tValue]
        );
        const traitID = resData.rows[0].id;
      }
    }
  } catch (err) {
    console.error(err);
  }
})();

//format for calling async function w/o delercation
//
// (asnyc ()=>{
//   > try/catch/finally/next etc <
// })();
