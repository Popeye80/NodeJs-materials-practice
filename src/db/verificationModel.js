const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
});

const Verification = mongoose.model('Verification', verificationSchema);

module.exports = {
  Verification,
};
