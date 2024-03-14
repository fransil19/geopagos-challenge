const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) => {
  const {players, gender} = req.body;

  if(!players || !gender) throw new ClientError("You must provide players list or gender data", 400)
  
  if(!(players.length && !(players.length & players.length -1))){//check if its power of 2
    throw new ClientError("The player list must be a power of 2", 400)
  }

  players.forEach(player => {
    if(player['gender'].toLowerCase() !== gender.toLowerCase()) throw new ClientError("There are player with distinct gender as the tournament gender", 400)
  }); 

  return next()
};