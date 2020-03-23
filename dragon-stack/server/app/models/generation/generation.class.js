const Dragon = require("../dragon/dragon.class.js");
const { REFREASH_RATE, SECONDS } = require("../../config.js");

const refreshRate = REFREASH_RATE * SECONDS; // 5 units in seconds so every 5 seconds

class Generation {
  constructor() {
    this.expiration = this.calculateExpiration();
  }

  calculateExpiration() {
    const expirationPeriod = Math.floor(Math.random() * (refreshRate / 2));
    const msUntilExpiration =
      Math.random() < 0.5
        ? refreshRate - expirationPeriod
        : refreshRate + expirationPeriod;

    return new Date(Date.now() + msUntilExpiration);
  }

  newDragon() {
    if (Date.now() > this.expiration) {
      throw new Error(`This generation expired on ${this.expiration}`);
    }
    return new Dragon();
  }
}

module.exports = Generation;
