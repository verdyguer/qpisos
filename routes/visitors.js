const express = require('express');
const visitor = require('../models/visitor');
const router = express.Router();
console.log ('entra modelo visitor')


router.get('/new', (req, res, next) => {
  console.log ('entra ruta visitor')
  res.render('visitors/new')});

router.post('/', (req, res, next) => {
  const newVisitor = new visitor({
    visitorName: req.body.visitorName,
    visitorPhone: req.body.visitorPhone,
    visitorEmail: req.body.visitorEmail
 
  });
console.log(newVisitor);
  newVisitor.save((err) => {
    if (err) {
      console.log('la concha')
      res.render('/');
    } else {
      res.redirect('/visitors/new');
    }
  });
});



module.exports = router;
