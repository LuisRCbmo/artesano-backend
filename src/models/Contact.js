const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cellphone: { type: String, required: true },
  address: { type: String, required: true },
  facebookLink: { type: String, required: true },
  instagramLink: { type: String, required: true },
  tiktokLink: { type: String, required: true },
});

module.exports = mongoose.model('Contact', contactSchema);
