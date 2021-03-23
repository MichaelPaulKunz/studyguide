let searchTerms;
const endpoint = 'https://www.mediawiki.org/w/apleti.php';
const params = {
  action: 'query',
  list: 'search',
  search: 'Nelson Mandella',
  format: 'json'
};
let url = endpoint + '?origin=*';
Object.keys(params).forEach((key) => {
  url += '&' + key + '=' + params[key];
});

console.log(url);
