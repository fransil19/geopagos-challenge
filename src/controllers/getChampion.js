const { response } = require("../utils")
const {calculateWinner, playerValidation, createTournament} = require("../services")

module.exports = async (req, res) => {
  const { players, gender } = req.body;
  const validatedPlayers = [];

  for (const player of players) {
    const dbPlayer = await playerValidation(player)
    validatedPlayers.push(dbPlayer)
  }

  const champion = await calculateWinner(validatedPlayers, gender)

  await createTournament(validatedPlayers, gender, champion)
  
  return response(res, 200, {message: `The champion of the tournament is ${champion.name}`, champion: champion})
}