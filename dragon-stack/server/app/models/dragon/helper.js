require("dotenv").config({ path: "../../../.env" });
const pool = require("../../../db/databasePool.js");
const DragonTable = require("./dragon.table.js");
const Dragon = require("./dragon.class.js");

const getDragonWithTraits = dragonId => {
  return Promise.all([
    DragonTable.getDragon(dragonId),
    new Promise((resolve, reject) => {
      pool.query(
        `SELECT "traitType", "traitValue"
         FROM trait
         INNER JOIN dragonTrait ON trait.id = dragonTrait."traitId"
         WHERE dragonTrait."dragonId" = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          resolve(response.rows);
        }
      );
    })
  ])
    .then(([dragon, dragonTraits]) => {
      return new Dragon({ ...dragon, dragonId, traits: dragonTraits });
    })
    .catch(error => console.error(error));
};

getDragonWithTraits(1)
  .then(drg => console.log(drg))
  .catch(err => {
    console.error(err);
  });

const getPublicDragons = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT id FROM dragon WHERE "isPublic" = TRUE',
      (error, response) => {
        if (error) return reject(error);

        const publicDragonRows = response.rows;

        Promise.all(
          publicDragonRows.map(({ id }) =>
            getDragonWithTraits({ dragonId: id })
          )
        )
          .then(dragons => resolve({ dragons }))
          .catch(error => reject(error));
      }
    );
  });
};

module.exports = { getDragonWithTraits, getPublicDragons };
