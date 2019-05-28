var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/users', usersCtrl.index);

//may not need this function
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
