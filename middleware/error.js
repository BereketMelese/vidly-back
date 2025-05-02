const winston = require("winston");

module.exports = function (err, req, res, next) {
  // winston.error(err.message, err);

  // // error
  // // warn
  // // info
  // // verbose
  // // debug
  // // silly
  // console.error("🔥 ERROR:", err);

  // res.status(500).send(err.message);

  //Log the full error stack
  console.error(err.stack); // <-- Add this line to log full error info
  winston.error(err.message, { metadata: err }); // Ensure you're logging the complete error
  res.status(500).send("Something went wrong, but it's being caught!");
};
