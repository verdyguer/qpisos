const express = require('express');
const router = express.Router();
const Listing = require('../models/listing');

/* GET home page. */
router.get('/', function(req, res, next) {
  Listing
    .find({})
    .populate('creator')
    .exec( (err, listings) => {
        res.render('index', { listings });
      });

});

module.exports = router;
