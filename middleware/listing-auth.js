const Listing = require('../models/listing.js');

function authorizeListing(req, res, next){
  Listing.findById(req.params.id, (err, listing) => {
    // If there's an error, forward it
    if (err)      { return next(err) }
    // If there is no listing, return a 404
    if (!listing){ return next(new Error('404')) }
    // If the listing belongs to the user, next()
    if (listing.belongsTo(req.user)){
      return next()
    } else {
      return res.redirect(`/listings/${listing._id}`)
    }
  });
}

function checkOwnership(req, res, next){
  Listing.findById(req.params.id, (err, listing) => {
    if (err){ return next(err) }
    if (!listing){ return next(new Error('404')) }
    if (req.user && listing.belongsTo(req.user)){
      res.locals.listingIsCurrentUsers = true;
    } else {
      res.locals.listingIsCurrentUsers = false;
    }
    return next()
  });
}

module.exports = {
  authorizeListing,
  checkOwnership
}
