const Philosophy = require('../models/Philosophy')
const User = require('../models/user');
const { ensureAuthenticated } = require('../middlewares/auth'); 

module.exports.addform=  (req, res) => {
    res.render('add.ejs');
  };

  module.exports.addtopicsUpload= async (req, res) => {

    const newData = req.body; // req.body contains the data from the form
    newData.owner= req.user._id;
    const createdData = await Philosophy.create(newData);

    res.redirect('/subjects/topics');
  };

  module.exports. getTopics= async (req, res) => {
    try {
      const subTopics = await Philosophy.find({});
      res.render('topics', { subTopics });
    }
    catch (err) {
      console.log(err);
    }
  };

  module.exports.getContent= async (req, res) => {
    try {
      let topicId = req.params.id;
      let topics = await Philosophy.findById(topicId);
  
      res.render('content', { topics });
    }
    catch (err) {
      console.log(err);
    };
  };

  module.exports.editForm =async (req, res) => {
    const { id } = req.params;
    const result = await Philosophy.findById(id);
    res.render('edit.ejs', { result: result });
  };

  module.exports.editLogic= async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    await Philosophy.findByIdAndUpdate(id, updatedData);
    res.redirect('/subjects/topics');
  };

  module.exports.deleteLogic =async (req, res) => {
    const { id } = req.params;
    await Philosophy.findByIdAndDelete(id);
    res.redirect('/subjects/topics')
  };

  module.exports. subAuth =async (req, res) => {
    res.render('subjects');
  };
  