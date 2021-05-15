const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  todoName: {
    type: String,
    required: true,
    unique: true,
  },
  isDone: {
    type: String,
    required: true,
    default: false,
  },
})

const todoModel = mongoose.model('todos', todoSchema)

module.exports = todoModel
