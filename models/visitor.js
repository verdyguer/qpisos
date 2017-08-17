const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment')

const visitorSchema = new Schema({
    visitorName: { type: String, require: true, unique: true },
    visitorEmail: { type: String, require: true, unique: true },
    visitorPhone: { type: String, require: true, unique: true },
});


module.exports = mongoose.model('visitor', visitorSchema);
