var express = require('express');
var path = require('path');
var rootPath = path.normalize(__dirname);
const paths = require('./paths');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', paths);
app.get('*', (req, res) => {
    res.sendFile(`${rootPath}/index.html`);
})

app.listen(8001);
console.log("server running on port 8001");
