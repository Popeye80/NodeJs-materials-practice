const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,

  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model('Post', postSchema);
module.exports = {Post};
