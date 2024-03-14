const { Tournament } = require("../db")

module.exports = async (players, gender, champion) => {

  const newTournament = await Tournament.create({
    gender: gender,
    champion_id: champion.id
  })

  const playersIds = players.map(player => player.id)

  await newTournament.setPlayers(playersIds)
}