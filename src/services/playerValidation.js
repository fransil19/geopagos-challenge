const { ClientError } = require("../utils/errors")
const createPlayer = require("./createPlayer")

module.exports = async (player) => {
  if (!player['strength'] || !player['speed'] || !player['reaction'] || !player['level']) throw new ClientError("Please provide all player stats (level, strength, speed, reaction)", 400)
  if (isNaN(player['strength']) || isNaN(player['speed']) || isNaN(player['reaction']) || isNaN(player['level'])) throw new ClientError("Error type data, all stats must be integer numbers", 400)
  if ((player['strength'] <= 0 || player['strength'] > 100) || 
      (player['speed'] <= 0 || player['speed'] > 100) ||
      (player['reaction'] <= 0 || player['reaction'] > 100) ||
      (player['level'] <= 0 || player['level'] > 100)) throw new ClientError("Error, all stats must be between 0 and 100", 400)
  return await createPlayer(player)
}