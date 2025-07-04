const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // đã được hash
});

module.exports = mongoose.model('Admin', adminSchema);
