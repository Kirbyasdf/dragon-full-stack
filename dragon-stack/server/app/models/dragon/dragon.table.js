const pool = require("../../../db/databasePool.js");

class DragonTable {
  static async storeDragon(dragon) {
    const { nickname, birthdate, generationId } = dragon;
    try {
      const resData = await pool.query(
        'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3) RETURNING id',
        [nickname, birthdate, generationId]
      );
      const dragonId = resData.rows[0].id;
      return dragonId;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = DragonTable;

// const { nickname, birthdate, generationId } = dragon;
// try {
//   const resData = pool.query(
//   'INSERT INTO dragon(nickname, birthdate, "generationId") VALUES($1, $2, $3)  RETURNING id',
//   [nickname, birthdate, generationId]
// );

//   return console.log(resData);
// } catch (err) {
//   console.error(err);
// }
// }
