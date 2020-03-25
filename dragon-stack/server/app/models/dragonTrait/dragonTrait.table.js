require("dotenv").config({ path: "../../../.env" });
const pool = require("../../../db/databasePool.js");
const TraitTable = require("../trait/trait.table.js");

class DragonTraitTable {
  static async storeDragonTrait(dragonId, traitType, traitValue) {
    try {
      const traitId = await TraitTable.getTraitId(traitType, traitValue);
      const resData = await pool.query(
        'INSERT INTO dragonTrait("traitId", "dragonId") VALUES($1 , $2)',
        [traitId, dragonId]
      );
      return resData;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = DragonTraitTable;
