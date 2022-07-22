const mongoose = require('mongoose');
const db = (url) => { mongoose.connect(url) }

module.exports = db;