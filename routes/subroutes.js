const express= require ('express');
const { ensureAuthenticated } = require('../middlewares/auth'); 
const router =express.Router();

  const subControllers= require('../controller/subcontrols');

//add route
router.get('/philsophy/add',ensureAuthenticated,subControllers.addform);
 //add logic
 router.post('/philosophy/upload', subControllers.addtopicsUpload);
//topic list route
router.get('/topics', ensureAuthenticated, subControllers.getTopics);
//content route
router.get('/topics/:id', subControllers.getContent);
//edit form route
router.get('/topics/:id/edit',subControllers.editForm)
//Edit logic
router.put('/topics/:id/edit/submit', subControllers.editLogic);

//Delete Route
router.delete('/topics/:id/delete',subControllers.deleteLogic);

router.get('/user_auth', ensureAuthenticated,subControllers.subAuth);

  module.exports= router;