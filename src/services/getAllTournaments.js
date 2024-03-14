const { Tournament, Player, conn } = require("../db")
const { Op } = require('sequelize');

module.exports = async (date, gender) => {
  if(date && gender){
    const tournaments = await Tournament.findAll({
      where: {
        gender: gender,
        [Op.eq]: conn.where(conn.fn('date', conn.col('createdAt')), '=', date),
        
      }
    });

    if(tournaments.length > 0){
      for (const tournament of tournaments) {
        const champion = await Player.findOne({ where: { id: tournament.dataValues.champion_id}})
        tournament.dataValues.champion = champion
      }
    }

    return tournaments
  }

  if(date){
    const tournaments = await Tournament.findAll({
      where: conn.where(conn.fn('date', conn.col('createdAt')), '=', date),
    });

    if(tournaments.length > 0){
      for (const tournament of tournaments) {
        const champion = await Player.findOne({ where: { id: tournament.dataValues.champion_id}})
        tournament.dataValues.champion = champion
      }
    }

    return tournaments
  }

  if(gender){
    const tournaments = await Tournament.findAll({
      where: {
        gender: {
          [Op.eq]: gender
        }
      }
    });

    if(tournaments.length > 0){
      for (const tournament of tournaments) {
        const champion = await Player.findOne({ where: { id: tournament.dataValues.champion_id}})
        tournament.dataValues.champion = champion
      }
    }

    return tournaments
  }

  const tournaments = await Tournament.findAll();
  if(tournaments.length > 0){
    for (const tournament of tournaments) {
      const champion = await Player.findOne({ where: { id: tournament.dataValues.champion_id}})
      tournament.dataValues.champion = champion
    }
  }

  return tournaments
}