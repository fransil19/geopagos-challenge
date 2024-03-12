const { response } = require("../utils")
const {calculateWinner} = require("../services")

module.exports = async (req, res) => {
  const { players, gender } = req.body;

  const winner = await calculateWinner(players, gender)

  return response(res, 201, {message: `The champion of the tournament is ${winner.name}`, champion: winner})
}