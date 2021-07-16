const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//In below when we define userSchema, we have only a single field named username and then within {} we have different validations, like type must be string, required true etc.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;