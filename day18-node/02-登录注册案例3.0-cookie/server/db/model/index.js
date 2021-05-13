const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  regiseter_date: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('users', userSchema)
