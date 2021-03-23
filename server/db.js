// TODO
const mongoose = require('mongoose');
const DB = 'studyguide';
const DB_URI = `mongodb://localhost/${DB}`;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to ${DB} database`))
  .catch(err => console.error(`Failed to connect to ${DB} database`, err));

const db = mongoose.connection;