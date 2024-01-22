const Joi = require("joi");

const adminSchema = Joi.object({
  user_id: Joi.number().required(),
});
const validateAdmin = (req, res, next) => {
  const adminId = req.body.user_id;

  const { error } = adminSchema.validate({ adminId }, { abortEarly: false });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateAdmin;
