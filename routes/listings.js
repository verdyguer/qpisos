const express        = require('express');
const Listing        = require('../models/listing');
const router         = express.Router();

router.get('/new', (req, res) => {
  res.render('listings/new');
});

router.post('/', (req, res, next) => {
  const newListing = new Listing({
    title       : req.body.title,
    description : req.body.description,
    home_type   : req.body.home_type,
    price       : req.body.price,
    // _owner      : req.user._id,
    size        : req.body.size,
    bedrooms    : req.body.bedrooms,
    bathrooms   : req.body.bathrooms
  });
});

module.exports = router;
