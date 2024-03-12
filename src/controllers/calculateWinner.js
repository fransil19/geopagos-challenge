const { response } = require("../utils")
const {ClientError} = require("../utils/errors")
const playerValidation = require("./playerValidation")

module.exports = async (req, res) => {
  const { players, gender } = req.body;

  for (let i = 1; i < players.length; i += 2) {
    playerValidation(players[i-1], gender)
    playerValidation(players[i], gender)

    if(gender.toLowerCase() === 'm'){
      sum = player['strength'] + player['speed'] + player['level']
      Math.random()
    }

  }

  //const newFilm = await Film.create({ _id, title, opening_crawl, director, producer, release_date, characters, planets });

  response(res, 201, newFilm)
}