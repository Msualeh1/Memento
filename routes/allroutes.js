const express= require ('express');
const Philosophy = require('../models/philosophy')
const { ensureAuthenticated } = require('../middlewares/auth'); 
const passport = require('passport');
const router =express.Router();
const wrapAsync= require('../errors/wrapAsync');


const genControllers= require('../controller/gencontrols');

//Home Routes
router.get('/', wrapAsync(genControllers.home))
  
  router.get('/home',wrapAsync (genControllers.homeAlt));
 

 //about route
  router.get('/about', wrapAsync(genControllers.about));

//search logic
router.get('/search', ensureAuthenticated, wrapAsync(genControllers.search));


module.exports= router;
  