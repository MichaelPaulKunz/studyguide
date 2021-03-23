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
  return Topic.find( { ident: topic.ident} )
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
//   ident: 21855450,
//   title: 'MongoDB',
//   blurb: ' <span class="searchmatch">mongodb</span>.com. &quot;Release Notes for <span class="searchmatch">MongoDB</span> 2.2&quot;. <span class="searchmatch">mongodb</span>.com. &quot;Release Notes for <span class="searchmatch">MongoDB</span> 2.4&quot;. <span class="searchmatch">mongodb</span>.com. &quot;Release Notes for <span class="searchmatch">MongoDB</span> 2.6&quot;. <span class="searchmatch">mongodb</span>.com...',
//   category: 'MongoDB'
// } );

//get all topics
const getTopics = () => {
  return Topic.find({});
};

module.exports.saveTopic = saveTopic;
module.exports.getTopics = getTopics;