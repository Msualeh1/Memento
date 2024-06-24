const mongoose = require("mongoose");
require('dotenv').config();



async function connectMongo() {
    try {
      await mongoose.connect(process.env.CONNECT_STR, {
        useNewUrlParser: true, // Corrected option name
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDb');
      staticCollection = mongoose.connection.collection('static');
    } catch (error) {
      console.log('error connecting to MongoDb', error);
    }
  }
 

  module.exports= connectMongo;