var express = require('express');
var router = express.Router();

/* GET home page. */

let count = 0; // never ever do this in the real world
router.get('/', function(req, res, next) {
  count++;
  res.render('index', { 
    title: 'Matt has created a node app on AWS OMGOMGOMGOMG',
    count });
});

module.exports = router;
