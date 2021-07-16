const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Similarly in below case we have defined exercise schema where we have different fields and each one has a validation associated with it.
const exerciseSchema = new Schema(
{
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, 
{
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;