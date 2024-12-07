const mongoose = require('mongoose');

const lineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Line', lineSchema);
