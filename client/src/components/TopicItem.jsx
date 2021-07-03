import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';



const TopicItem = props => {
  const [blurbs, setBlurbs] = useState('');
  const [isShown, setIsShown] = useState(false);
  const getInfo = function(subject) {
    //alert(subject);
    axios.put('/api/wiki', {
      search: subject,
    })
      .then(data => {
        //console.log('hello from get info');
        //console.log(data.data);
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
        if (!isShown) {
          setBlurbs(organized);
          setIsShown(true);
        } else {
          setBlurbs('');
          setIsShown(false);
        }
      });
  };

  return (
    <div>
      <div id="topic" onClick={() => getInfo(props.topic)}><b><large><h3>{props.topic}</h3></large></b></div>
      <div>{blurbs}</div>
    </div>
  );
};


export default TopicItem;

/**
 * axios.post('/api/wiki', {
      search: topic,
    })
 */