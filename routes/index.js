var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
                        Message:'Main Page'});
});

/* GET User Pages */
router.get('/dilpreet', function(req, res, next) {
  res.render('dilpreet', { title: 'Page for Dilpreet',
            Message: 'Dilpreet is currently residing in canada and doing his diploma in computers'});
});

router.get('/harbhajan', function(req, res, next) {
  res.render('harbhajan', { title: 'Page for harbhajan',
                        Message:'harbhajan is grandmother of dilpreet and passed away last year'});
});

router.get('/navreet', function(req, res, next) {
  res.render('navreet', { title: 'Page for Navreet',
                        Message:'Navreet is younger sister of dilpreet. she just got graduated'});
});

router.get('/palwinder', function(req, res, next) {
  res.render('palwinder', { title: 'Page for Palwinder',
                        Message:'palwinder is mother of dilpreet . she is a house wife.'});
});

router.get('/sukhjit', function(req, res, next) {
  res.render('sukhjit', { title: 'Page for Sukhjit',
                        Message:'sukhjit is  government employee and father of dilpreet'});
});

router.get('/swaran', function(req, res, next) {
  res.render('swaran', { title: 'Page for Swaran',
                        Message:'he is grandfather of dilpreet and a retired government employee'});
});

module.exports = router;
