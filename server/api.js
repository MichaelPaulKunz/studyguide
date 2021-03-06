const { Router } = require('express');
const WikiRouter = Router();
const { getWikiSummaries } = require('./wiki');
const { saveTopic } = require('./db');
const { getTopics } = require('./db');
const { getAllCategories } = require('./db');
const { getAllTopics } = require('./db');
const { deleteAllTopics } = require('./db');
//console.log(getWikiSummaries);
//console.log(saveTopic);
//console.log(getTopics);
WikiRouter.get('/', (req, res) => {
    console.log('get request sent');
    console.log(req.body.search);
    if (req.body.search) {
        getTopics(req.body.search)
            .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(err);
        });
    }
    else {
        getAllCategories(req.body.search)
            .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send(data);
        });
    }
});
WikiRouter.put('/', (req, res) => {
    console.log('put request sent');
    console.log(req.body.search);
    getTopics(req.body.search)
        .then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    })
        .catch(err => {
        res.status(500).send(err);
    });
});
WikiRouter.post('/', (req, res) => {
    console.log('post request sent');
    console.log(req.body.search);
    getWikiSummaries(req.body.search)
        .then(data => {
        console.log(data);
        for (let i = 0; i < 5; i++) {
            saveTopic(data[i]); //only save the first 5
        }
    }).then(data => {
        res.status(201).send('ok');
    });
});
WikiRouter.delete('/', (req, res) => {
    deleteAllTopics()
        .then(res.status(201).send('ok'))
        .catch(err => res.status(500).send(err));
});
module.exports = {
    WikiRouter,
};
