// Post Schema
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateInfo: {
      type: String,
      required: true,
    },
    itemInfo: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
)


module.exports = mongoose.model('Item', itemSchema)