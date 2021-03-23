// TODO
const mongoose = require('mongoose');
const DB = 'studyguide';
const DB_URI = `mongodb://localhost/${DB}`;
//define connection
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to ${DB} database`))
  .catch(err => console.error(`Failed to connect to ${DB} database`, err));
//establish connection
const db = mongoose.connection;
//define schema
const topicSchema = new mongoose.Schema({
  ident: { type: Number, unique: true, required: true },
  title: String,
  blurb: String,
  category: String,
});
//establish model
const Topic = mongoose.model('Topic', topicSchema);

//add documents to collection
const saveTopic = (topic) => {
  return Topic.find( { ident: topic.ident } )
    .then((data) => {
      if (!data.length) {
        const newTopic = new Topic ({
          ident: topic.ident,
          title: topic.title,
          blurb: topic.blurb,
          category: topic.category
        });
        return newTopic.save(function(err, newTopic) {
          if (err) {
            return console.log(err);
          } else {
            console.log(`${topic.title} successfully added`);
            return newTopic;
          }
        });
      }
    });
};
// saveTopic({
//   ident: 19006979,
//   title: 'Macintosh',
//   blurb: 'interface, built-in screen, and mouse. <span class="searchmatch">Apple</span> sold the Macintosh alongside its popular <span class="searchmatch">Apple</span> II, <span class="searchmatch">Apple</span> III, and <span class="searchmatch">Apple</span> Lisa families of computers until the...',
//   category: 'apple'
// } );

//get topics from given category
const getTopics = (cat) => {
  return Topic.find({category: cat});
};

module.exports.saveTopic = saveTopic;
module.exports.getTopics = getTopics;