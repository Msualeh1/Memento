const Philosophy = require('../models/Philosophy')
const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const { ensureAuthenticated } = require('../middlewares/auth'); 

module.exports.signInform= (req, res) => {
    res.render('signIn');
  };

  module.exports.signInLogic = async (req, res, next) => {
    passport.authenticate('local', {
      failureRedirect: '/signIn',
      failureFlash: true,
    })(req, res, () => {
      req.flash('success', 'Successfully Logged In');
      res.redirect('/subjects/user_auth');
    });
  };

  module.exports. logOut= (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('out', 'You are Logged out')
        res.redirect('/');
    });
  };

  module.exports.signUp= (req,res)=>{
    res.render('signUp');
  };

  module.exports.signUpLogic= async (req, res,next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new User({ username, email });
  
      await newUser.setPassword(password);
      await newUser.save();
      req.login(newUser, (err) => {
        if (err) {
          return next(err)
        }
        req.flash('registered', 'Account Created!');
        res.redirect('/');
      })
    }
    catch (err) {
      if (err.code === 11000) {
        req.flash('error', 'Username or email already exists!')
        return res.redirect('/signUp');
      }
  
    }
  };
  