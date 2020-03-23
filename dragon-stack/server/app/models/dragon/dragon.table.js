const pool = require("../../../db/databasePool.js");

class DragonTable {
  static async storeDragon(dragon) {
    const { nickname, birthdate, generationId } = dragon;
    try {
      const resData = await pool.query(
        'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3) RETURNING id',
        [nickname, birthdate, generationId]
      );
      // notice how generationId is in double quotes...well its to keep the i in Id capped... when doing this you must be inside single qulites so ' "" '
      const dragonId = resData.rows[0].id;
      return dragonId;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = DragonTable;
