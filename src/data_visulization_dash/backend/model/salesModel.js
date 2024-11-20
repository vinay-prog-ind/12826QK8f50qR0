const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    Day: String,
    Age: String,
    Gender: String,
    A: Number,
    B: Number,
    C: Number,
    D: Number,
    E: Number,
    F: Number
}, {strict: false});

const sales = mongoose.model('sales', salesSchema);

module.exports = sales;