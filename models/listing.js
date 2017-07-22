const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const moment   = require('moment')

const ListingSchema = new Schema({
  title       : { type: String, required: true },
  description : { type: String, required: false },
  home_type   : { type: String, enum: ["Flat", "House or chalet", "Country home", "Duplex", "Penthouses"], required: true },
  price       : { type: Number, required: true },
  _owner      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  size        : { type: Number},
  bedrooms    : { type: Number},
  bathrooms   : { type: Number}
});


const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
