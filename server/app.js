const path = require('path');
const express = require('express');
const { WikiRouter } = require('./api');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
app.use(express.json());
app.use(express.static(CLIENT_PATH));
app.use('/api/wiki', WikiRouter);

module.exports = {
  app,
};
