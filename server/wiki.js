const fetch = require('node-fetch');
/*
    search.js

    MediaWiki API Demos
    Demo of `Search` module: Search for a text or title

    MIT License
*/

//This function should return an array of id numbers, titles, and blurbs
//for various wikipedia articles associated with the given topic
const getWikiSummaries = (topic) => {

  let url = 'https://en.wikipedia.org/w/api.php';

  const params = {
    action: 'query',
    list: 'search',
    srsearch: topic,
    format: 'json',
  };

  url = url + '?origin=*';
  Object.keys(params).forEach(function (key) {
    url += '&' + key + '=' + params[key];
  });

  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const titles = [];
      response.query.search.forEach(entry => {
        //console.log(entry.title);
        titles.push({id: entry.pageid, title: entry.title, blurb: `${entry.snippet}...`});
      });
      return (titles);
    })
    .catch(function (error) {
      console.log(error);
    });
};
// getWikiSummaries('http')
//   .then(response => {
//     console.log(response);
//   });
module.exports.getWikiSummaries = getWikiSummaries;