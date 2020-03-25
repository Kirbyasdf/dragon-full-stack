require("dotenv").config({ path: "../../../.env" });
const pool = require("../../../db/databasePool.js");
const DragonTraitTable = require("../dragonTrait/dragonTrait.table.js");

class DragonTable {
  static async storeDragon(dragon) {
    const { nickname, birthdate, generationId } = dragon;
    try {
      const resData = await pool.query(
        'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3) RETURNING id',
        [nickname, birthdate, generationId]
      );
      // notice how generationId is in double quotes...well its to keep the i in Id capped... when doing this you must be inside single quotes so ' "" '
      const dragonId = resData.rows[0].id;
      const res = await Promise.all(
        dragon.traits.map(({ traitType, traitValue }) => {
          DragonTraitTable.storeDragonTrait(dragonId, traitType, traitValue);
        })
      ).catch(error => reject(error));

      return dragonId;
    } catch (err) {
      console.error(err);
    }
  }

  static async getDragon(dragonId) {
    try {
      const resData = await pool.query(
        'SELECT birthdate, nickname, "generationId" FROM dragon WHERE dragon.id = $1 ',
        [dragonId]
      );
      return resData.rows[0] === 0 ? new Error("no dragon") : resData.rows[0];
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = DragonTable;
