// TODO
//this file sets up our port listener on our server side and handles http requests

//express routing
const express = require('express');
const app = express();
const path = require('path');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const partials = require('express-partials'); //also installed in terminal

//import helper functions
const db = require('./db');
const wiki = require('./wiki');
//console.log(db);
//console.log(wiki);

//middleware
app.use(express.static(CLIENT_PATH)); //not sure what this does
//start the server
const PORT = 8080;
app.listen(PORT, '127.0.0.1', (() => {
  console.log(`Server listening on :${PORT}`);
}));

/**
 * HTTP HANDLERS
 **/

//middleware
const { Router } = require('express');
const classroom = Router();
classroom.use(express.json());
classroom.use(partials); //in case we need to use url extensions

classroom.get('/', (req, res) =>{
  console.log('get request sent');
  res.send('hello student');
});
