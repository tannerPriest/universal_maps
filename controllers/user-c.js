const User = require('../model/User')
const Joi = require('@hapi/joi');

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
})

const create = async (req, res) => {
   const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    const user = new User(req.body)
    user.save(function(err) {
      if (err) return res.render('error')
      res.redirect('/main')
    })
  }

  module.exports = {
      create,
  }