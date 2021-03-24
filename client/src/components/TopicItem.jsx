import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const getInfo = function(subject) {
  //alert(subject);
  axios.put('/api/wiki', {
    search: subject,
  })
    .then(data => {
      console.log('hello from get info');
      console.log(data.data);
      const organized = data.data.reduce((string, item)=>{
        let cleanedUp = '';
        let include = true;
        item.blurb.split('').forEach(char => {
          if (char === '<' || char === '&') {
            include = false;
          }
          if (include) {
            cleanedUp += char;
          }
          if (char === '>' || char === ';') {
            include = true;
          }
        });
        string += `${item.title}:\n ${cleanedUp} \n \n`;
        return string;
      }, '');
      alert(organized);
    });
};

const TopicItem = props => (
  <li onClick={() => getInfo(props.topic)}>{props.topic}</li>
);

export default TopicItem;

/**
 * axios.post('/api/wiki', {
      search: topic,
    })
 */