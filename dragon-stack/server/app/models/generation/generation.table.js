const pool = require("../../../db/databasePool.js");

class GenerationTable {
  static async storeGeneration(generation) {
    try {
      const resData = await pool.query(
        "INSERT INTO generation(expiration) VALUES($1) RETURNING id",
        [generation.expiration]
      );
      const generationId = resData.rows[0].id;
      return generationId;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = GenerationTable;

// pool.query(
//   `INSERT INTO generation(expiration) VALUES(${generation.expiration})`
// );
//
// ^ don't do it this way because allows for SQL injection also I know index 0=1 ...here odd but whatever
