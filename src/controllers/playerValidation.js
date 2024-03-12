const { response } = require("../utils")
const {ClientError} = require("../utils/errors")

module.exports = (player, gender) => {
    if(!player['strength'] || !player['speed'] || !player['reaction'] || !player['level']) throw new ClientError("Please provide all player stats (level, strength, speed, reaction)", 400)
    if(isNaN(player['strength']) || isNaN(player['speed']) || isNaN(player['reaction']) || isNaN(player['level'])) throw new ClientError("Error type data, all stats must be integer numbers", 400)
}