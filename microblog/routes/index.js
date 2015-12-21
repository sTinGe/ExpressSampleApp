var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res) {
  res.render('list', {
    title: 'List',
    items: [1991, 'test']
  });
});
module.exports = router;
