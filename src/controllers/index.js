const { catchedAsync } = require("../utils");

module.exports = {
  getChampion: catchedAsync(require("./getChampion")),
}