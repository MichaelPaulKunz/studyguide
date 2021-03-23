// TODO
//this file sets up our port listener on our server side

//express routing
const express = require('express');
const app = express();
const path = require('path');
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

//import helper functions
const db = require('./db');
const wiki = require('./wiki');
//console.log(db);
//console.log(wiki);

//middleware
app.use(express.static(CLIENT_PATH));
app.use(express.json());

//start the server
const PORT = 8080;
app.listen(PORT, (() => {
  console.log(`Server listening on :${PORT}`);
}));