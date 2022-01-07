const mongoose = require('mongoose')
const Joi = require('joi')

const userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1025
  },
  email: {
    type: String,
    required: true,
    unique: 'Email is required',
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
})

module.exports = mongoose.model('User', userSchema)