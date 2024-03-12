const { catchedAsync } = require("../utils");

module.exports = {
  calculateWinner: catchedAsync(require("./calculateWinner")),
}