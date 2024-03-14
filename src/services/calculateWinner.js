const playerValidation = require("./playerValidation")

module.exports = async function calculateWinner(players, gender) {
  if (players.length === 1) return players[0]

  const nextRound = []

  for (let i = 1; i <= players.length; i += 2) {
    const player1 = players[i - 1]
    const player2 = players[i]

    let areDifferent = false;
    
    while (!areDifferent) {
      if (gender.toLowerCase() === 'm') {
        sumP1 = player1.strength + player1.speed + player1.level
        sumP2 = player2.strength + player2.speed + player2.level
        totalP1 = Math.floor(Math.random() * sumP1)
        totalP2 =Math.floor(Math.random() * sumP2)

        if (totalP1 > totalP2) {
          nextRound.push(player1)
          areDifferent = true
        }
        else if (totalP1 < totalP2) {
          nextRound.push(player2)
          areDifferent = true
        }
      }

      if (gender.toLowerCase() === 'f') {
        sumP1 = player1.reaction + player1.level
        sumP2 = player2.reaction + player2.level
        totalP1 = Math.random() * sumP1
        totalP2 = Math.random() * sumP2

        if (totalP1 > totalP2) {
          nextRound.push(player1)
          areDifferent = true
        }
        if (totalP1 < totalP2) {
          nextRound.push(player2)
          areDifferent = true
        }
      }
    }
  }

  return calculateWinner(nextRound, gender)
}