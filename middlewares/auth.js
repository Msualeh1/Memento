const passport = require('passport');

module.exports.ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('auth', 'Must login first');
  res.redirect('/user/signIn_page');
};
