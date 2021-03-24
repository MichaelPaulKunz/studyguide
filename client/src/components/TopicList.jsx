import React from 'react';
import PropTypes from 'prop-types';
import TopicItem from './TopicItem.jsx';

const TopicList = props => {

  return (
    <div>
      <h2>Crammed Topics</h2>
      <ul>{props.topics.map(topic => <TopicItem topic={topic}/>)}</ul>
    </div>
  );
};

export default TopicList;