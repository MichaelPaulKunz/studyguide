import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem.jsx';

const TopicList = props => {

  return (
    <div>
      <h1 id="header">Crammed Topics</h1>
      <div>{props.topics.map((topic, index) => <TopicItem topic={topic} key={index}/>)}</div>
    </div>
  );
};

export default TopicList;