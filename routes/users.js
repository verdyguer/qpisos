var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get user profile

router.get('/profile', function(req, res){
res.render('profile', { username: req.user.username });
});

module.exports = router;
