const { Player } = require("../db")

module.exports = async (player) => {
  
  const exists = await Player.findOne({ where: { name: player['name'].toLowerCase() } });
  if (!exists) {
    const newPlayer = await Player.create({
      name: player['name'],
      level: player['level'],
      strength: player['strength'],
      speed: player['speed'],
      reaction: player['reaction'],
      gender: player['gender']
    })

    return newPlayer.dataValues
  }

  return exists.dataValues
}