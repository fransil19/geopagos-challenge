const { response } = require("../utils")
const { getAllTournaments } = require("../services")

module.exports = async (req, res) => {
  const { date, gender } = req.query;

  const tournaments = await getAllTournaments(date, gender)
  
  return response(res, 200, {message: `Tournament List`, tournaments: tournaments})
}