// TODO
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import NewTopic from './NewTopic.jsx';
import TopicList from './TopicList.jsx';
import Summaries from './Summaries.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [5, 4, 3, 2, 1],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.addCat = this.addCat.bind(this);
    //this.showCats = this.showCats.bind(this);
  }

  showCats() {
    axios.get('/api/wiki')
      .then((response)=> {
        //console.log('hello from showCats');
        //console.log(response.data);
        this.setState({topics: response.data});
      });
  }

  componentDidMount() {
    this.showCats();
  }

  handleSearch(topic) {
    console.log(`${topic} was searched`);
    axios.post('/api/wiki', {
      search: topic,
    })
      .then(this.showCats());
  }

  addCat() {
  }

  render() {
    const { topics } = this.state;
    return (
      <div>
        <NewTopic onSearch={this.handleSearch}/>
        <TopicList topics={topics} />
        <Summaries/>
      </div>
    );
  }
}

export default App;