const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const visitorSchema = new Schema({
    visitorName: { type: String, require: true},
    visitorEmail: { type: String, require: true},
    visitorPhone: { type: String, require: true}
});


module.exports = mongoose.model('visitor', visitorSchema);
