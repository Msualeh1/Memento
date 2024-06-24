const express= require ('express');
const router =express.Router();

const userControls= require('../controller/usercontrols');
 //sign in form
 router.get('/signIn_page',userControls.signInform);
  //sign in logic
  router.post('/signIn/submit', userControls.signInLogic);
 //sign out logic
 router.get('/logout/submit', userControls.logOut);
  //signUp form
  router.get('/signUp', userControls.signUp);
  //sign Up logic
router.post('/signUp/create_account', userControls.signUpLogic);

  
  module.exports= router;