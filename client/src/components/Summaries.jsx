import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Summaries = props => {

  const kill = function() {
    axios.delete('/api/wiki')
      .then(alert('study session over'));
  };

  return (
    <div><button onClick={() => kill()}>Delete All</button></div>
  );
};

export default Summaries;