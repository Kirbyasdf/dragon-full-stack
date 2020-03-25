require("dotenv").config({ path: "../../../.env" });
const pool = require("../../../db/databasePool.js");

class TraitTable {
  static async getTraitId(traitType, traitValue) {
    try {
      const resData = await pool.query(
        'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
        [traitType, traitValue]
      );
      return resData.rows[0].id;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = TraitTable;
