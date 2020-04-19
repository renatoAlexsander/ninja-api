const mongoose, { Schema } = require('mongoose');

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name field is required.']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  }
})

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;