import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TopicList from './TopicList.jsx';

class NewTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      topic: e.target.value,
    });
  }

  handleClick() {
    const { onSearch } = this.props;
    const { topic } = this.state;
    console.log(topic);
    onSearch(topic);
  }

  render() {
    const { topic } = this.state;
    return (
      <div>
        <h1>What do you need to cram?</h1>
        <input value={topic} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Explore</button>
      </div>
    );
  }
}

NewTopic.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NewTopic;