//const express = require('express');
//const mongoose = require('mongoose');
//const passport = require('passport');
//const LocalStrategy = require('passport-local');
//const Philosophy = require('./models/Philosophy')
//const User = require('./models/user');
//const flash = require('connect-flash');
//const path = require('path');
//const ejsMate = require('ejs-mate');
//const cookieParser = require('cookie-parser')
//const session = require('express-session');
//const bodyParser = require('body-parser');
//const app = express();

// Connect to MongoDB
//async function connectToMongoDB() {
    //try {
        //await mongoose.connect('mongodb+srv://cbaloch40:S5O0XickIu11ZBpg@cluster0.2jzm1hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            //useNewUrlParser: true,
           // useUnifiedTopology: true
       // });
       // console.log('Connected to MongoDB Atlas');
        //importing "static" collection from mongodb without creating schema.
       // static = mongoose.connection.collection('static');
    //} catch (error) {
     //   console.error('Error connecting to MongoDB Atlas:', error);
   // }
//}

//connectToMongoDB();


// Middleware setup
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, "views"));
//app.use(express.static(path.join(__dirname, 'public')));
//app.engine('ejs', ejsMate);
//app.use(bodyParser.urlencoded({ extended: true }));
//pp.use(session({ secret: 'mysypersecretstring', resave: false, saveUninitialized: false }));

// Passport configuration and connect-flash setup
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(cookieParser())
//app.use(flash());


//passport.use(new LocalStrategy({
   // usernameField: 'email', // Use email instead of username
   // passwordField: 'password'
//},// User.authenticate()));

//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// Middleware to check if the user is authenticated
//function ensureAuthenticated(req, res, next) {
  //  if (req.isAuthenticated()) {
   //     return next();
   // }
   // res.redirect('/signIn');
//}

//Flash message
//app.use((req, res, next) => {
  //  res.locals.messages = req.flash();
   // res.locals.status= req.user;
  //  next();
//});

// Route handlers
//app.get('/', async (req, res) => {
    //res.render('index');
//});

//app.get('/signUp', (req, res)=>{
        //res.render('signUp.ejs')
    //});

    //app.post('/signUp', async (req, res) => {
       // const { username, email, password } = req.body;
        //const newUser = new User({ username, email });
      
      //  try {
        //  await newUser.setPassword(password);
        //  await newUser.save();
        //  req.login(newUser, (err)=>{
          //  if(err){
          //      return next(err);
          //  }
          //  req.flash('registered', 'Account Created!');
         // res.redirect('/');
         // })
           // Redirect to login page after successful signup
        //} catch (err) {
          // Handle Passport's Duplicate Key Error
         // if (err.code === 11000) { // Duplicate key error code
           // req.flash('error', 'Username or Email already exists!');
          //} else {
            // Handle other errors (optional)
          //  req.flash('error', 'An error occurred during registration!');
         // }
         // res.redirect('/signUp'); // Redirect back to signup page with error message
       // }
      //});

//app.get('/subjects', ensureAuthenticated, async (req, res) => {
  //  res.render('subjects.ejs');
//});

//app.get('/philosophy', async (req, res) => {
   // const allnotes = await Philosophy.find({});
   // res.render('philotopics', { Philosophy: allnotes });
//});

//app.get('/philosophy/:id', async (req, res) => {
   // const topicId = req.params.id;
    //const topics = await Philosophy.findById(topicId);
  //  res.render('topic-body.ejs', { topics: topics });
//});

//app.get('/about', async (req, res) => {
   // const aboutpage = await static.findOne({ topic: "About Us" });
   // res.render('about', { aboutpage });
    
//});

//app.get('/search', ensureAuthenticated, async (req, res) => {
   // const key = req.query.key;
    //let data = await Philosophy.find({
     //   "$or": [{ 'topic': { $regex: key, $options: 'i' } }]
    //});

    //res.render('search.ejs', { data: data });
//});


//app.get('/signIn', (req, res) => {
   // res.render('signIn.ejs');
//});


//app.post('/signIn', 
 //   passport.authenticate('local', {
  //    failureRedirect: '/signIn',
  //    failureFlash: true,
   // }),
   // async(req, res)=>{
    //    req.flash('success','Welcome to your Subjects Repository')
     //   res.redirect('/subjects')
   // });
    
 //app.get('/logOut', (req, res)=>{
   // req.logout((err)=>{
      //  if(err){
     //       return next(err);
       // }
      //  req.flash('logout', 'Logged Out')
       // res.redirect('/');
    //});
 //});


// Start the server
//app.listen(3000, () => {
    //console.log('Server is listening on port 3000');
//});


