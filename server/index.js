const express = require('express');
const app = express();
const router = require('./routes');

app.use(router);
app.use(express.static(__dirname + '/../client'));

module.exports = app;
