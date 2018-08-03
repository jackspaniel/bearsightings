var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Matt has created a node app on AWS OMGOMGOMGOMG' });
});

module.exports = router;
