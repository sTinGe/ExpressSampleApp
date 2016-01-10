var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/u/:username', function(req, res) {
  res.send('user: ' + req.params.username);
});

router.post('/post', function(req, res) {

});

router.get('/reg', function(req, res) {
  
});

router.post('/reg', function(req, res) {

});

router.get('/login', function(req, res) {

});

router.post('/login', function(req, res) {

});

router.get('/logout', function(req, res) {

});

router.get('/show', function(req, res) {
  
});

module.exports = router;
