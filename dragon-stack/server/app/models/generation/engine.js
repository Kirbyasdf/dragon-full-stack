const Generation = require("./generation.class.js");
const GenerationTable = require("./generation.table.js");

class GenerationsEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  async buildNewGeneration() {
    const generation = new Generation();
    try {
      const generationId = await GenerationTable.storeGeneration(generation);
      this.generation = generation;
      this.generation.generationId = generationId;
      this.timer = setTimeout(
        () => this.buildNewGeneration(),
        this.generation.expiration.getTime() - Date.now()
      );
    } catch (err) {
      console.error(err);
    } finally {
      console.log("\x1b[33m\x1b[40m", this.generation, "\x1b[0m");
    }
  }
}

module.exports = GenerationsEngine;
