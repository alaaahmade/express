const express = require('express');
const path = require('path');
const compression = require('compression');
const route = require("../src/controllers/index");

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3001);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);

app.use(route);

module.exports = app;