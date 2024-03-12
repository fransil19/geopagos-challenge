const {ClientError} = require("../utils/errors")
const {Player} = require("../db")

module.exports = async (player) => {
  const exists = Player.findOne({ where: { name: player['name'] } });

  if(!exists){
    const newPlayer = Player.create({ 
      name: player['name'], 
      level: player['level'],
      strength: player['strength'],
      speed: player['speed'],
      reaction: player['reaction'],
      gender: player['gender']
    })

    return newPlayer
  }

  return exists
}