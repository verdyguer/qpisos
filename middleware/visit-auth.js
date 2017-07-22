const Visit = require('../models/Visit.js');

function authorizeVisit(req, res, next){
  Visit.findById(req.params.id, (err, Visit) => {
    // If there's an error, forward it
    if (err)      { return next(err) }
    // If there is no Visit, return a 404
    if (!Visit){ return next(new Error('404')) }
    // If the Visit belongs to the user, next()
    if (Visit._creator.equals(req.user._id)){
      return next()
    } else {
    // Otherwise, redirect
      return res.redirect(`/Visits/${Visit._id}`)
    }
  });
}



function checkOwnership(req, res, next) {
    Visit.findById(req.params.id, (err, Visit) => {
        if (err) { return next(err) }
        if (!Visit) { return next(new Error('404')) }

        if (Visit.belongsTo(req.user)) {
            res.locals.VisitIsCurrentUsers = true;
        } else {
            res.locals.VisitIsCurrentUsers = false;
        }
        return next()
    });
}
module.exports = {
    authorizeVisit,
    checkOwnership
};

