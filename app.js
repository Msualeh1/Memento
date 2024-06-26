require('dotenv').config();
require('dotenv').config({ path: './config.env' });

const errorhandler = require('./middlewares/errorhandler');

const express = require('express');


const path = require('path');
const ejsMate = require('ejs-mate');
const ejs = require('ejs');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const rateLimit= require('express-rate-limit');
const methodOverride = require('method-override');
const sanitize = require('express-mongo-sanitize');
const User = require('./models/user');
const connectMongo = require('./middlewares/connect');


const app = express();
//rate limiter to prevent bruteforce, DOS and DDOS attacks
limiter = rateLimit({
  max: 1000,
  windowMs: 60*60*1000,
 message: 'Recieved too many request try again after 1 hour'
});

app.use('/user', limiter);
app.use('/subjects', limiter);
//Error handlers

process.on('unhandledRejection ', (err)=>{
  console.log(err.name);
  console.log('Unhandeled rejections occurred! shutting down...')
  process.exit(1);

})
process.on('uncaughtException', (err)=>{
  console.log(err.name);
  console.log('UncaughtException occurred! shutting down...')
  process.exit(1);

})
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
const allroutes =require('./routes/allroutes');

const userroutes = require('./routes/userroutes');
const subroutes = require('./routes/subroutes');


connectMongo();

//Middleware setup

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//to protect from NoSQL Malicious Injections
app.use(sanitize());

app.use(methodOverride("_method"));
app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(flash());

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  User.authenticate()
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//Flash Message Setup
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  res.locals.status = req.user;
  
  next();
});
//general routes
app.use('/',allroutes);
//subject routes
app.use('/subjects',subroutes);
//User routes
app.use('/user', userroutes);
//default route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorhandler);

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});


