var express = require('express');
var router = express.Router();

var elements = require('../elements');
var ExampleElement = require('../elements/ExampleElement');
var CustomElement = require('../elements/CustomElement');

/* GET home page. */
router.get('/', function(req, res) {
  elements.render(req, res, [
    ExampleElement,
    CustomElement
  ], function(err, elements) {
    if (err) res.send(500, err);
    else res.render('index', {
      title: 'Polymer project / node-express'
    });
  });
});

module.exports = router;
