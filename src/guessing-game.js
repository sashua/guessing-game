class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.value = null;
  }

  setRange(min, max) {
    this.min = min + 1;
    this.max = max - 1;
  }

  guess() {
    this.value = Math.round((this.min + this.max) / 2);
    return this.value;
  }

  lower() {
    this.max = this.value - 1;
  }

  greater() {
    this.min = this.value + 1;
  }
}

module.exports = GuessingGame;
