const express        = require('express');
const Listing        = require('../models/listing');
const router         = express.Router();
const { ensureLoggedIn }  = require('connect-ensure-login');

router.get('/new', ensureLoggedIn('/login'), (req, res) => {
  res.render('listings/new');
});

router.post('/', ensureLoggedIn('/login'), (req, res, next) => {
  const newListing = new Listing({
    title       : req.body.title,
    description : req.body.description,
    home_type   : req.body.home_type,
    price       : req.body.price,
    _owner      : req.user._id,
    size        : req.body.size,
    bedrooms    : req.body.bedrooms,
    bathrooms   : req.body.bathrooms
  });
  newListing.save( (err) => {
    if (err) {
       res.render('newListing/new');
     } else {
       res.redirect(`/`);
     }
  });
});

module.exports = router;
