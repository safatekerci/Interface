var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Connection Security' });
});

router.get('/connections', function(req, res, next) {
  res.render('connections', { title: 'connections' });
});

module.exports = router;
