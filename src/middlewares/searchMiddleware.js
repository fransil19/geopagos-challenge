const {ClientError} = require("../utils/errors")

module.exports = (req, res, next) => {
  const { date, gender } = req.query;

  if(gender){
    if(!isNaN(gender)) throw new ClientError("The gender can't be a number. Use 'm' for male and 'f' for female", 400)

    if(gender.length > 1) throw new ClientError("The gender must be 1 character, 'm' for male and 'f' for female", 400)
  }

  if(date){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new ClientError("Please use date format 'yyyy-mm-dd'. E.g.: '2024-03-14'", 400)
  }

  return next()
};