var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); });

/*Страница macOS */
router.get('/macOS', function(req, res, next) {
  res.send("<h1> Cтраница macOS <h1> ")
});

/* Страница Apple_watch */
router.get('/Applewatch', function(req, res, next) { 
  res.send("<h1>Страница Applewatch</h1>")
});

/* Страница Iphone */
router.get('/Iphone', function(req, res, next) {
  res.send("<h1>Страница Iphone</h1>")
});

module.exports = router;
