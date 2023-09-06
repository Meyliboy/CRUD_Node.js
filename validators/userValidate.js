const Joi = require("joi");
const schema = Joi.object().keys({
  userName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  login: Joi.string().required(),
  password: Joi.string().min(8).required(),
});

module.exports = schema;
