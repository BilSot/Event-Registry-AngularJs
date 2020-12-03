var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname);
const fs = require('fs');
var router = express.Router();

router.get('/data/event/:id', (req,res) => {
    let event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf-8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
});

router.get('/data/events', (req, res) => {
    var eventsFilesPath = 'app/data/event/';
    var files = [];
    try {
        files = fs.readdirSync(eventsFilesPath);
    }
    catch (e) {
        console.log(e)
        res.send('[]');
        res.end();
    }
    var results = "[";
    for (var idx = 0; idx < files.length; idx++) {
        if (files[idx].indexOf(".json") == files[idx].length - 5) {
            results += fs.readFileSync(eventsFilesPath + "/" + files[idx]) + ",";
        }
    }
    results = results.substr(0, results.length - 1);
    results += "]";

    res.setHeader('Content-Type', 'application/json');
    res.send(results);
    res.end();
});

module.exports = router;
