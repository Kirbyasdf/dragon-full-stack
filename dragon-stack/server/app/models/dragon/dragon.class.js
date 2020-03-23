const TRAITS = require("../../../data/traits.json");
const DragonTable = require("./dragon.table.js");

const DEFAULT_PROPERTIES = {
  nickname: "no-name",
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(t => {
      const traitType = t.type;
      const traitValues = t.values;
      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];
      traits.push({ traitType, traitValue });
    });
    return traits;
  }
};

class Dragon {
  constructor({ birthdate, nickname, traits, generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Dragon;
