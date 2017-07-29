// const express = require('express');
// const Visit = require('../models/Visit');
// const router = express.Router();
// const { ensureLoggedIn } = require('connect-ensure-login');
// const {
//   authorizeVisit,
//     checkOwnership
//   } = require('../middleware/Visit-auth');
//
// router.get('/new', (req, res) => {
//   res.render('Visits/new', { types: TYPES });
// });
//
//
// router.get('/:id', checkOwnership, (req, res, next) => {
//   Visit.findById(req.params.id, (err, Visit) => {
//     if (err){ return next(err); }
//
//     Visit.populate('_creator', (err, Visit) => {
//       if (err){ return next(err); }
//       return res.render('Visits/show', { Visit });
//     });
//   });
// });
//
//
//
// router.post('/', ensureLoggedIn('/login'), (req, res, next) => {
//     const newVisit = new Visit({
//         meeting: req.body.meeting,
//         // We're assuming a user is logged in here
//         // If they aren't, this will throw an error
//         _creator: req.user._id
//     });
//
//     newVisit.save((err) => {
//         if (err) {
//         res.render('Visits/new', { Visit: newVisit, types: TYPES });
//     } else {
//         res.redirect(`/Visits/${newVisit._id}`);
//     }
//
//     });
// });
//
//
//
// router.get('/:id/edit', ensureLoggedIn('/login'), authorizeVisit, (req, res, next) => {
//     Visit.findById(req.params.id, (err, Visit) => {
//         if (err) { return next(err) }
//         if (!Visit) { return next(new Error("404")) }
//         return res.render('Visits/edit', { Visit})
//     });
// });
//
//
// router.post('/:id', ensureLoggedIn('/login'), authorizeVisit, (req, res, next) => {
//     const updates = {
//         meeting: req.body.meeting
//     };
//
//
//     Visit.findByIdAndUpdate(req.params.id, updates, (err, Visit) => {
//         if (err) { return res.render('Visits/edit', { Visit, errors: Visit.errors }); }
//         if (!Visit) { return next(new Error("404")); }
//         return res.redirect(`/Visits/${Visit._id}`);
//     });
// });
//
// module.exports = router;
