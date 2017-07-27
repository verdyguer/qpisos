const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const moment   = require('moment')
const constants = require('../lib/constants')

const ListingSchema = new Schema({
  title       : { type: String, required: true },
  description : { type: String, required: false },
  home_type   : { type: String, enum: constants.home_type, required: true },
  price       : { type: Number, required: true },
  _owner      : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  size        : { type: Number, required: true},
  bedrooms    : { type: Number, required: true},
  bathrooms   : { type: Number, required: true}
});

ListingSchema.methods.belongsTo = function(user){
  return this._owner.equals(user._id);
};


const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;
