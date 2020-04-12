const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
})

module.exports = mongoose.model('Form', FormSchema)