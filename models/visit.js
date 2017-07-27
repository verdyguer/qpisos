const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment= require('moment')

const VisitSchema = new Schema({
    _owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    listing_id: { type: Schema.Types.ObjectId, ref: 'Listing' },
});


module.exports = mongoose.model('Visit', VisitSchema);
