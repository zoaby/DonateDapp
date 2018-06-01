const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RequestSchema = new Schema({
  user: String,
  postId: String,
  description: String,
  amount: Number,
  receiver: String,
  approvals: [String],
  donorsCount: Number,
  finalized: {
    type: Boolean
  }
})

module.exports = mongoose.model('Request', RequestSchema)
