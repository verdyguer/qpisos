const express = require('express');
const visitor = require('../models/visitor');
const router = express.Router();
console.log ('entra fichero')


router.get('/new', (req, res, next) => {
  console.log ('entra ruta')
  res.render('visitors/new')});

router.post('/', (req, res, next) => {
  const newVisitor = new visitor({
    nameVisitor: req.body.nameVisitor,
    namePhone: req.body.namePhone,
    nameEmail: req.body.nameEmail,
     _owner: req.user._id
  });

  newVisitor.save((err) => {
    if (err) {
      res.render('visitors/new');
    } else {
      res.redirect(`/visitors/${newVisitor._id}`);
    }
  });
});




module.exports = router;
