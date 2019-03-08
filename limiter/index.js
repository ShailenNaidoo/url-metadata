const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 10000,
  max: 1000
});

module.exports = limiter;