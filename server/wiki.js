/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/
const fetch = require('node-fetch');
let url = 'https://en.wikipedia.org/w/api.php';

const params = {
  action: 'query',
  list: 'search',
  srsearch: 'banana',
  format: 'json',
};

url = url + '?origin=*';
Object.keys(params).forEach(function (key) {
  url += '&' + key + '=' + params[key];
});

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    response.query.search.forEach(entry => {
      console.log('-----------');
      console.log('-----------');
      console.log('-----------');
      console.log(entry);
      console.log('-----------');
      console.log('-----------');
      console.log('-----------');
    });
  })
  .catch(function (error) {
    console.log(error);
  });
