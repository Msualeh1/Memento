const { ensureAuthenticated } = require('../middlewares/auth');
const Philosophy = require('../models/philosophy')

const { NotFoundError, BadRequestError, CustomError } = require('../errors/customErrors');






module.exports.homeAlt = (req, res, next) => {
  res.render('index');
};

module.exports.home = (req, res, next) => {
  res.render('index');
};

module.exports.about = async (req, res, next) => {
  const aboutdata = await staticCollection.findOne({ topic: "About Us" });
  if (!aboutdata) {
    throw new NotFoundError('About Us data not found');
  }
  res.render('about', { aboutdata });
};

module.exports.search = async (req, res, next) => {
  const key = req.query.key;
  if (!key) {
    throw new BadRequestError('Search key is missing');
  }
  let data = await Philosophy.find({
    "$or": [{ 'topic': { $regex: key, $options: 'i' } }]
  });
  if (!data.length) {
    throw new NotFoundError('No matching topics is found');
  }
  res.render('search.ejs', { data });
};
