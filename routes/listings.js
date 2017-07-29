const express = require('express');
const Listing = require('../models/listing');
const router = express.Router();
const { ensureLoggedIn } = require('connect-ensure-login');
const constants = require('../lib/constants')
const {
  authorizeListing,
  checkOwnership
} = require('../middleware/listing-auth');



router.get('/new', ensureLoggedIn('/login'), (req, res) => {
  res.render('listings/new', { home_type: constants.home_type });
});

router.post('/', ensureLoggedIn('/login'), (req, res, next) => {
  console.log(req.body);
  const newListing = new Listing({
    title: req.body.title,
    description: req.body.description,
    home_type: req.body.home_type,
    price: req.body.price,
    _owner: req.user._id,
    size: req.body.size,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    location: {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    }
  });

  newListing.save((err) => {
    if (err) {
      res.render('listings/new', { home_type: constants.home_type });
      console.log("no lo guarda")
    } else {
      res.redirect(`/listings/${newListing._id}`);
    }
  });
});


router.get('/:id', checkOwnership, (req, res, next) => {
  Listing.findById(req.params.id, (err, listing) => {
    if (err) { return next(err); }

    listing.populate('_owner', (err, listing) => {
      if (err) { return next(err); }
      return res.render('listings/show', { listing });
    });
  });
});


router.get('/:id/edit',
  [
    ensureLoggedIn('/login'),
    authorizeListing,
  ],
  (req, res, next) => {
    Listing.findById(req.params.id, (err, listing) => {
      if (err) { return next(err) }
      if (!listing) { return next(new Error("404")) }
      return res.render('listings/edit', { listing, home_type: constants.home_type })
    });
  });


module.exports = router;
